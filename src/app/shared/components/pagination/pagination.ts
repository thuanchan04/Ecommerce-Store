import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icon.model';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-pagination',
  imports: [Icon],
  templateUrl: './pagination.html'
})
export class Pagination {
  @Input() totalPages = 5;
  @Input() currentPage = 1;

  Icons = Icons;

  getPages(): (number | string)[] {
    const PAGES: (number | string)[] = [];

    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) PAGES.push(i);
    } else {
      if (this.currentPage <= 3) {
        PAGES.push(1, 2, 3, '...', this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        PAGES.push(1, '...', this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        PAGES.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }
    }
    return PAGES;
  }

  goToPage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.currentPage = page;
    }
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  getButtonClass(isActive: boolean): string {
    const BASE =
      'inline-flex items-center justify-center w-[48px] h-[48px] rounded-md font-medium text-[18px] transition-colors duration-150';
    const VARIANT = isActive
      ? 'bg-black text-white hover:bg-gray-800'
      : 'bg-white text-black border border-black hover:bg-gray-100';
    return `${BASE} ${VARIANT}`;
  }

  getPageNumberClass(isActive: boolean): string {
    const BASE =
      'inline-flex items-center justify-center w-[46px] h-[46px] rounded-md font-semibold text-[20px] transition-all duration-150';
    const VARIANT = isActive ? 'bg-black text-white' : 'bg-white text-black border border-gray-300';
    return `${BASE} ${VARIANT}`;
  }
}
