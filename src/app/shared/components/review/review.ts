import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ReviewService } from '../../../core/service/review.service';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-review',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './review.html'
})
export class Review {
  private reviewService = inject(ReviewService);

  Icons = Icons;

  readonly avg = computed(() => this.reviewService.getAverageRating());
  readonly total = computed(() => this.reviewService.getTotalReviews());
  readonly stars = computed(() => this.reviewService.getStars());

  readonly avgDisplay = computed(() => this.avg().toFixed(1));

  // Returns array of 5 fill-percents: 100=full, 50=half, 0=empty
  readonly starFills = computed<number[]>(() => {
    const avg = this.avg();
    return [1, 2, 3, 4, 5].map(i => {
      const diff = avg - (i - 1);
      if (diff >= 1) return 100;
      if (diff <= 0) return 0;
      return Math.round(diff * 100);
    });
  });

  getLabel(star: number): string {
    switch (star) {
      case 1: return 'Poor';
      case 2: return 'Below Average';
      case 3: return 'Average';
      case 4: return 'Good';
      case 5: return 'Excellent';
      default: return '';
    }
  }

  getQuantity(star: number): number {
    return this.stars()[star] ?? 0;
  }

  getLinePercent(star: number): number {
    return this.reviewService.getLinePercent(star);
  }
}
