import { Component } from '@angular/core';
import { Icon } from "../icon/icon";
import { Icons } from '..//icon/icon.model';


@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  imports: [Icon],
})
export class SearchFieldComponent {
  Icons = Icons
}