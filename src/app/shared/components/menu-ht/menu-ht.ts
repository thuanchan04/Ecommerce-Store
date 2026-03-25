import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-ht',
  imports: [RouterModule],
  templateUrl: './menu-ht.html'
})
export class MenuHT {
  @Input() items: { label: string, path: string }[] = [];

  @Input() startColumn = 1;
}
