import { Component, Input } from '@angular/core';
import { MOCK_REVIEWS } from './mock_review';
import { Icon } from "../icon/icon";
import { Icons } from '../icon/icon.model';

@Component({
  selector: 'app-review',
  imports: [Icon],
  templateUrl: './review.html'
})
export class Review {
  @Input() stars = MOCK_REVIEWS.stars;

  Icons = Icons;

  AVG_STAR = (
    Object.entries(this.stars).reduce((acc, [star, count]) => acc + Number(star) * count, 0) /
    Object.values(this.stars).reduce((acc, count) => acc + count, 0)
  ).toFixed(1);

  avgStarNumber = Number(this.AVG_STAR);

  TOTAL_REVIEWS = Object.values(this.stars).reduce((acc, count) => acc + count, 0);

  get fullStars(): number[] {
    return Array(Math.floor(this.avgStarNumber)).fill(0);
  }

  get hasPartialStar(): boolean {
    return this.avgStarNumber % 1 !== 0;
  }

  get partialFillPercent(): number {
    return Math.round((this.avgStarNumber % 1) * 100); // ví dụ 0.3 -> 30
  }

  get emptyStars(): number[] {
    const total = 5;
    const used = Math.ceil(this.avgStarNumber);
    return Array(total - used).fill(0);
  }

  getQuantity(star: number): string {
    const count = MOCK_REVIEWS.stars[star] || 0;
    return `${count}`;
  }

  getLinePercent(star: number): number {
    const count = MOCK_REVIEWS.stars[star] || 0;
    return Math.round((count / this.TOTAL_REVIEWS) * 100);
  }

  getLable(star: number): string {
    switch (star) {
      case 1: return 'Poor';
      case 2: return 'Below Average';
      case 3: return 'Average';
      case 4: return 'Good';
      case 5: return 'Excellent';
      default: return '';
    }
  }
}
