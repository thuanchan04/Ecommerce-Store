import { Component } from '@angular/core';
import { Logo, LogoTypes } from "../logo/logo";
import { SearchField } from "../search-field/search-field";
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-header-top',
  imports: [Logo, SearchField, Icon],
  templateUrl: './header-top.html'
})
export class HeaderTop {

  LogoTypes = LogoTypes;
  Icons = Icons;

  columnRatios = [2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2 ];

  gridTemplateColumns = this.columnRatios.map(r => `${r}fr`).join(' ');

}
