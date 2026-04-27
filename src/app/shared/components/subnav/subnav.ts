import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

interface SubnavCategory {
  label: string;
  icon: Icons;
  categoryId: string;
}

@Component({
  selector: 'app-subnav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RouterLink],
  templateUrl: './subnav.html'
})
export class Subnav {
  Icons = Icons;

  categories: SubnavCategory[] = [
    { label: 'Phones', icon: Icons.PHONES, categoryId: 'phone' },
    { label: 'Computers', icon: Icons.COMPUTERS, categoryId: 'computer' },
    { label: 'Smart Watches', icon: Icons.SMART_WATCHES, categoryId: 'watch' },
    { label: 'Cameras', icon: Icons.CAMERA, categoryId: 'camera' },
    { label: 'Headphones', icon: Icons.HEADPHONES, categoryId: 'headphone' },
    { label: 'Gaming', icon: Icons.GAMING, categoryId: 'gaming' },
  ];
}

