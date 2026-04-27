import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Logo, LogoTypes } from "../../../shared/components/logo/logo";

@Component({
  selector: 'app-login',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, RouterLink, Logo],
  templateUrl: './login.html',
})
export class Login {
  LogoTypes = LogoTypes;

  email = '';
  password = '';
  rememberMe = false;
  showPassword = signal(false);
  errorMessage = signal('');

  private router = inject(Router);

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage.set('Please fill in all fields.');
      return;
    }
    // Demo auth: accept any non-empty credentials
    if (this.email && this.password.length >= 4) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage.set('Password must be at least 4 characters.');
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }
}
 
