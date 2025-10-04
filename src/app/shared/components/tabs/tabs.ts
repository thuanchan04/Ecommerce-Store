import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html'
})
export class TabsComponent {
  @Input() tabs: { id: string; label: string; available: boolean }[] = [];
  @Input() selectedTabId: string | null = null;
  @Output() selectedTabIdChange = new EventEmitter<string>();

  selectTab(tab: { id: string; label: string; available: boolean }) {
    if (!tab.available) return; // disabled -> không chọn
    this.selectedTabId = tab.id;
    this.selectedTabIdChange.emit(tab.id);
  }
}
