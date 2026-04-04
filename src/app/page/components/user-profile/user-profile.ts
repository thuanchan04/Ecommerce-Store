import { Component } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Subnav } from "../../../shared/components/subnav/subnav";

@Component({
  selector: 'app-user-profile',
  imports: [HeaderTop, Subnav],
  templateUrl: './user-profile.html'
})
export class UserProfile {

}
