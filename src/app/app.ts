import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo, LogoTypes } from './shared/components/logo/logo';
import { Icon } from './shared/components/icon/icon';
import { Icons } from './shared/components/icon/icon.model';
import { InputField } from './shared/components/input-field/input-field';
import { InputFieldType } from './shared/components/input-field/input-field';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Icon, InputField],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('e-store');
  LogoTypes = LogoTypes;
  Icons = Icons;
  InputFieldType = InputFieldType;
}
