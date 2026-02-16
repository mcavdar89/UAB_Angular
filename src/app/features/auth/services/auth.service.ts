import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { Observable, tap } from 'rxjs';
import { ResponseModel } from '../../../shared/models/response.model';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'token';

  private _token = signal<string | null>(
    localStorage.getItem(this.tokenKey)
  );

  token = computed(() => this._token());
  isAuthenticated = computed(() => !!this._token());

  http = inject(HttpClient);

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.key === this.tokenKey) {
        this._token.set(event.newValue);
      }
    });
  }


  signIn(loginModel: LoginModel): Observable<ResponseModel<string>> {

    return this.http.post<ResponseModel<string>>('http://localhost:5100/api/Auth/login', loginModel).pipe(
      // map((response) => response),
      tap((response) => {
        if (response.isSuccess && response.data) {
          //localStorage.setItem('token', response.data);
          this.setToken(response.data);
        }
      })
    );

  }

  getPersmissions(): string[] {

    let token = this.getTokenToJson();
    debugger;

    if (token) {
      return token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'].split(',') as string[];

      // Decode the token to extract permissions


    }



    return [];
  }


  private getTokenToJson(): any {

    debugger;
    let token = this._token();

    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }

    return null;


  }




  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this._token.set(token);
  };








}
