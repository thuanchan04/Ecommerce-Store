import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
  storageOptions = ['64GB', '128GB', '256GB'];
  selected = '256GB';

  select(option: string) {
    this.selected = option;
  }
}
