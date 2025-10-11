import { Component } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-search-field',
  imports: [Icon],
  templateUrl: './search-field.html'
})
export class SearchField {  
  Icons = Icons;
}
