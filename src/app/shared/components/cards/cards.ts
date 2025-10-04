import { Component } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-cards',
  imports: [Icon],
  templateUrl: './cards.html'
})
export class Cards {
  Icons = Icons;
}
