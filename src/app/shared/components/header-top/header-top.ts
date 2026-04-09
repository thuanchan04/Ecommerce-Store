import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Logo, LogoTypes } from "../logo/logo";
import { SearchField } from "../search-field/search-field";
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';
import { RouterModule } from '@angular/router';
import { MenuHT } from '../menu-ht/menu-ht';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [Logo, SearchField, Icon, RouterModule, MenuHT],
  templateUrl: './header-top.html'
})
export class HeaderTop {

  @Output() searchChange = new EventEmitter<string>();

  LogoTypes = LogoTypes;
  Icons = Icons;

  menuItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Blog', path: '/blog' }
  ];
  columnRatios = [1, 3, 6, 3, 3, 3, 3, 0.1, 0.1, 0.1, 0.1];

  gridTemplateColumns = this.columnRatios.map(r => `${r}fr`).join(' ');

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
  onSearch(value: string) {
    this.searchChange.emit(value);
  }

}
