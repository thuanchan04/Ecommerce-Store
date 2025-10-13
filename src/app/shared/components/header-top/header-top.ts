import { Component, signal } from '@angular/core';
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

  columnRatios = [2, 2.5, 7, 2, 2, 3, 2, 1, 1, 1, 2];

  gridTemplateColumns = this.columnRatios.map(r => `${r}fr`).join(' ');

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

}
