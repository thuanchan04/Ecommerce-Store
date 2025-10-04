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
import { TabsComponent } from "./shared/components/tabs/tabs";
import { Cards } from "./shared/components/cards/cards";
import { Checkbox } from "./shared/components/checkbox/checkbox";
import { RadioButton } from "./shared/components/radio-button/radio-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Icon, DropdownComponent, FieldWithoutLabelComponent, FieldWithLabelComponent, SearchFieldComponent, Button, Cards, Checkbox, RadioButton, TabsComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('e-store');
  LogoTypes = LogoTypes;
  ButtonVariant = ButtonVariant;
  Icons = Icons;

  check1 = false;
  check2 = true;
  apple = false;

  radioValue = '2';
  
    memoryTabs = [
    { id: '64', label: '64GB', available: true },
    { id: '128', label: '128GB', available: false },
    { id: '256', label: '256GB', available: true }
  ];

    colorTabs = [
    { id: 'black', label: 'Black', available: true },
    { id: 'silver', label: 'Silver', available: true },
    { id: 'gold', label: 'Gold', available: false }
  ];

  selectedMemoryId: string | null = '256';
  selectedColorId: string | null = 'black';
}
