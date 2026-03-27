import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Subnav } from "../../../shared/components/subnav/subnav";

@Component({
  selector: 'app-contact',
  imports: [HeaderTop, Subnav],
  templateUrl: './contact.html'
})
export class Contact {

}
