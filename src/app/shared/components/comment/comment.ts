import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ReviewService, ReviewComment } from '../../../core/service/review.service';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-comment',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './comment.html'
})
export class Comment {
  private reviewService = inject(ReviewService);

  Icons = Icons;

  readonly comments = computed<ReviewComment[]>(() => this.reviewService.getComments());

  getStarFills(star: number): number[] {
    return [1, 2, 3, 4, 5].map(i => {
      const diff = star - (i - 1);
      if (diff >= 1) return 100;
      if (diff <= 0) return 0;
      return Math.round(diff * 100);
    });
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
