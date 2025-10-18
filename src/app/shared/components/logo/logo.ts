import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.html'
})
export class Logo {
  @Input() logoType = LogoTypes.DARK;
}

export enum LogoTypes {
  LIGHT = 'assets/images/logoLight.svg',
  DARK = 'assets/images/logoDark.svg'
}
