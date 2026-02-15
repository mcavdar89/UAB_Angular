import { Component, inject, OnInit, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormField, InputTextModule, ButtonModule, CardModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  login = signal<LoginModel>({
    ePosta: '',
    password: '',
  } as LoginModel);

  form = form(this.login, (schemaPath) => {
    required(schemaPath.ePosta, { message: 'Email is required' });
    email(schemaPath.ePosta, { message: 'Email must be a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 2, { message: 'Password must be at least 2 characters long' });
  });


  service = inject(AuthService);

  route = inject(Router);


  constructor() {
  }


  ngOnInit(): void {
    // Initialization logic here
  }


  singIn(): void {
    debugger;
    if (this.form().valid()) {
      this.service.signIn(this.login()).subscribe((response) => {
        if (response.isSuccess) {
          console.log('Login successful:', response.data);

          setTimeout(() => {
            this.route.navigate(['/car/list']);
          }, 2000);


          // Handle successful login, e.g., navigate to dashboard, store token, etc.
        } else {
          console.log('Login failed:', response.message);
          // Handle login failure, e.g., show error message to user
        }


      });

    }
    else {
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }


}