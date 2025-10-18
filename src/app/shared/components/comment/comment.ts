import { Component, Input } from '@angular/core';
import { MOCK_REVIEWS } from '../review/mock_review';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [Icon],
  templateUrl: './comment.html'
})
export class Comment {
  @Input() comments = MOCK_REVIEWS.reviews;
  Icons = Icons;

  getStars(star: number): number[] {
    return Array(Math.floor(star)).fill(0);
  }

  getEmptyStars(star: number): number[] {
    return Array(5 - Math.floor(star)).fill(0);
  }

  formatDate(dateStr: string): string {
    const [day, month, year] = dateStr.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

}
