import { Injectable } from '@angular/core';
import { FILTER_DATA, FilterGroup } from '../../data/filter.data';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  getFilters(): FilterGroup[] {
    return FILTER_DATA;
  }
}