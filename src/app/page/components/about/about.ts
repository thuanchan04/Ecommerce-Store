import { Component } from '@angular/core';
import { HeaderTop } from '../../../shared/components/header-top/header-top';
import { Footer } from "../../../shared/components/footer/footer";
import { Subnav } from "../../../shared/components/subnav/subnav";

@Component({
  selector: 'app-about',
  imports: [HeaderTop, Footer, Subnav],
  templateUrl: './about.html'
})
export class About {

}
