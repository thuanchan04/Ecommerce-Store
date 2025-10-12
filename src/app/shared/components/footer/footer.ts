import { Component } from '@angular/core';
import { LogoTypes, Logo } from '../logo/logo';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-footer',
  imports: [Logo, Icon],
  templateUrl: './footer.html'
})
export class Footer {
  LogoTypes = LogoTypes;
  Icons = Icons;

  columnRatios = [3, 3, 3];
  gridTemplateColumns = this.columnRatios.map(r => `${r}fr`).join(' ');

}
