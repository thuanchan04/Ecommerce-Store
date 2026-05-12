import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderTop } from '../../../shared/components/header-top/header-top';
import { Footer } from "../../../shared/components/footer/footer";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer, RouterLink],
  templateUrl: './about.html'
})
export class About {
  team: TeamMember[] = [
    { name: 'Alex Johnson', role: 'CEO & Founder', avatar: 'AJ' },
    { name: 'Sarah Lee', role: 'Head of Product', avatar: 'SL' },
    { name: 'Marcus Chen', role: 'Lead Developer', avatar: 'MC' },
    { name: 'Priya Patel', role: 'Customer Success', avatar: 'PP' },
  ];
}
