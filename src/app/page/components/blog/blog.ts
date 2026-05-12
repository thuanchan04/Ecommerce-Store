import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderTop } from "../../../shared/components/header-top/header-top";
import { Footer } from "../../../shared/components/footer/footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderTop, Footer],
  templateUrl: './blog.html'
})
export class Blog {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max vs Samsung Galaxy S24 Ultra: The Ultimate Flagship Battle',
      excerpt: 'We put the two biggest smartphones of the year head-to-head in our comprehensive comparison. From camera systems to battery life, find out which device deserves your money in 2024.',
      date: 'March 15, 2024',
      category: 'Phones',
      readTime: '8 min read',
      image: '📱'
    },
    {
      id: 2,
      title: 'The Best Wireless Headphones for Every Budget in 2024',
      excerpt: 'Whether you\'re looking for premium noise-cancelling AirPods Max or an affordable alternative, our expert guide covers the top wireless headphones across all price ranges.',
      date: 'February 28, 2024',
      category: 'Audio',
      readTime: '6 min read',
      image: '🎧'
    },
    {
      id: 3,
      title: 'MacBook Air M3 Review: The Laptop That Does It All',
      excerpt: 'Apple\'s latest MacBook Air with the M3 chip redefines what a thin-and-light laptop can do. We spent three weeks testing it for everything from video editing to gaming.',
      date: 'January 20, 2024',
      category: 'Computers',
      readTime: '10 min read',
      image: '💻'
    }
  ];
}

