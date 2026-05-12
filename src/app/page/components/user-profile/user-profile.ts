import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Footer } from "../../../shared/components/footer/footer";

interface Order {
  id: string;
  date: string;
  items: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  avatar: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer, RouterLink, FormsModule],
  templateUrl: './user-profile.html'
})
export class UserProfile {
  user = signal<UserInfo>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    joinDate: 'January 2023',
    avatar: 'JD',
  });

  showEditModal = signal(false);
  editForm: Omit<UserInfo, 'email' | 'joinDate' | 'avatar'> = { name: '', phone: '', address: '' };

  orders: Order[] = [
    { id: '#ORD-10045', date: 'Mar 20, 2024', items: 'iPhone 14 Pro Max × 1', total: 1399, status: 'Delivered' },
    { id: '#ORD-10032', date: 'Feb 14, 2024', items: 'AirPods Max × 1, Apple Watch × 1', total: 948, status: 'Delivered' },
    { id: '#ORD-10021', date: 'Jan 05, 2024', items: 'MacBook Air × 1', total: 1299, status: 'Delivered' },
    { id: '#ORD-10067', date: 'Apr 01, 2024', items: 'Samsung Galaxy S24 × 1', total: 799, status: 'Processing' },
  ];

  openEdit(): void {
    const u = this.user();
    this.editForm = { name: u.name, phone: u.phone, address: u.address };
    this.showEditModal.set(true);
  }

  saveEdit(): void {
    this.user.update(u => ({
      ...u,
      name: this.editForm.name,
      phone: this.editForm.phone,
      address: this.editForm.address,
    }));
    this.showEditModal.set(false);
  }

  cancelEdit(): void {
    this.showEditModal.set(false);
  }

  statusClass(status: Order['status']): string {
    const map: Record<Order['status'], string> = {
      Delivered: 'bg-green-100 text-green-700',
      Processing: 'bg-yellow-100 text-yellow-700',
      Shipped: 'bg-blue-100 text-blue-700',
      Cancelled: 'bg-red-100 text-red-700',
    };
    return map[status];
  }
}

