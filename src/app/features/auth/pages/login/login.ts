import { Component, OnInit, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LoginModel } from '../../models/login.model';

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


  ngOnInit(): void {
    // Initialization logic here
  }


  setLogin(): void {
    debugger;
    if (this.form().valid()) {
      // Save logic here
      console.log('Login data:', this.login());
    }
    else {
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }


}