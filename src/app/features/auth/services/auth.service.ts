import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../shared/models/response.model';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  http = inject(HttpClient);

  signIn(loginModel: LoginModel): Observable<ResponseModel<string>> {

    return this.http.post<ResponseModel<string>>('http://localhost:5100/api/Auth/login', loginModel);

  }




}
