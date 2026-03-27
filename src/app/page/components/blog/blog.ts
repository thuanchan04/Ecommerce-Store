import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Subnav } from "../../../shared/components/subnav/subnav";

@Component({
  selector: 'app-blog',
  imports: [HeaderTop, Subnav],
  templateUrl: './blog.html'
})
export class Blog {

}
