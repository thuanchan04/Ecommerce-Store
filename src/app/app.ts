import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo, LogoTypes } from './shared/components/logo/logo';
import { Icon } from './shared/components/icon/icon';
import { Icons } from './shared/components/icon/icon.model';
import { DropdownComponent } from "./shared/components/input_components/dropdown.component";
import { FieldWithoutLabelComponent } from "./shared/components/input_components/field-without-label.component";
import { FieldWithLabelComponent } from "./shared/components/input_components/field-with-label.component";
import { SearchFieldComponent } from "./shared/components/input_components/search-field.component";
import { Button, ButtonVariant } from './shared/components/buttons/buttons';
import { Tabs } from "./shared/components/tabs/tabs";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Icon, DropdownComponent, FieldWithoutLabelComponent, FieldWithLabelComponent, SearchFieldComponent, Button, Tabs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('e-store');
  LogoTypes = LogoTypes;
  ButtonVariant = ButtonVariant;
  Icons = Icons;
}
