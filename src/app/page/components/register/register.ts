import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Logo, LogoTypes } from "../../../shared/components/logo/logo";

@Component({
  selector: 'app-register',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, RouterLink, Logo],
  templateUrl: './register.html',
})
export class Register {
  LogoTypes = LogoTypes;

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  showPassword = signal(false);
  errorMessage = signal('');

  private router = inject(Router);

  onRegister(): void {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage.set('Please fill in all fields.');
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage.set('Passwords do not match.');
      return;
    }
    if (this.password.length < 6) {
      this.errorMessage.set('Password must be at least 6 characters.');
      return;
    }
    this.router.navigate(['/home']);
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }
}

