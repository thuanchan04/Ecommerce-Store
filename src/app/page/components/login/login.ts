import { Component, inject } from '@angular/core';
import { InputField, InputFieldType } from "../../../shared/components/input-field/input-field";
import { Button } from "../../../shared/components/button/button";
import { Logo, LogoTypes } from "../../../shared/components/logo/logo";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputField, Button, Logo],
  templateUrl: './login.html',
})
export class Login {
  InputFieldType = InputFieldType;
  LogoTypes = LogoTypes;

  username = '';
  password = '';
  errorMessage = '';

  router = inject(Router);

  onLogin() {
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Sai username hoặc password!';
    }
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
} 
