import { Injectable } from '@angular/core';
import { MOCK_REVIEWS } from '../../shared/components/review/mock_review';

export interface ReviewComment {
  username: string;
  avatar: string;
  star: number;
  comment: string;
  images: string[];
  date: string;
}

export interface ReviewData {
  stars: Record<number, number>;
  reviews: ReviewComment[];
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private data: ReviewData = MOCK_REVIEWS;

  getStars(): Record<number, number> {
    return this.data.stars;
  }

  getComments(): ReviewComment[] {
    return this.data.reviews;
  }

  getAverageRating(): number {
    const stars = this.data.stars;
    const total = Object.values(stars).reduce((acc, count) => acc + count, 0);
    if (total === 0) return 0;
    return Object.entries(stars).reduce(
      (acc, [star, count]) => acc + Number(star) * count, 0
    ) / total;
  }

  getTotalReviews(): number {
    return Object.values(this.data.stars).reduce((acc, count) => acc + count, 0);
  }

  getLinePercent(star: number): number {
    const total = this.getTotalReviews();
    if (total === 0) return 0;
    return Math.round(((this.data.stars[star] ?? 0) / total) * 100);
  }
}
