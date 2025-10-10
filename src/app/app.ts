import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logo, LogoTypes } from './shared/components/logo/logo';
import { Icon } from './shared/components/icon/icon';
import { Icons } from './shared/components/icon/icon.model';
import { DropdownComponent } from "./shared/components/input_components/dropdown.component";
import { FieldWithoutLabelComponent } from "./shared/components/input_components/field-without-label.component";
import { FieldWithLabelComponent } from "./shared/components/input_components/field-with-label.component";
import { SearchFieldComponent } from "./shared/components/input_components/search-field.component";
import { TabsComponent } from "./shared/components/tabs/tabs";
import { Cards } from "./shared/components/cards/cards";
import { Checkbox } from "./shared/components/checkbox/checkbox";
import { RadioButton } from "./shared/components/radio-button/radio-button";
import { Button } from "./shared/components/button/button";
import { CommonModule } from '@angular/common';
import { Pagination } from "./shared/components/pagination/pagination";
import { Slider } from "./shared/components/slider/slider";
import { CategoryFilter } from "./shared/components/category-filter/category-filter";
import { CategoryCard } from "./shared/components/category-card/category-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Logo, Icon, DropdownComponent, FieldWithoutLabelComponent, FieldWithLabelComponent, SearchFieldComponent, Cards, Checkbox, RadioButton, TabsComponent, Button, CommonModule, Pagination, Slider, CategoryFilter, CategoryCard],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('e-store');
  LogoTypes = LogoTypes;
  Icons = Icons;

  check1 = false;
  check2 = true;
  apple = false;

  radioValue = '2';
  
    memoryTabs = [
    { id: '64', label: '64GB', available: true },
    { id: '128', label: '128GB', available: false },
    { id: '256', label: '256GB', available: true }
  ];

    colorTabs = [
    { id: 'black', label: 'Black', available: true },
    { id: 'silver', label: 'Silver', available: true },
    { id: 'gold', label: 'Gold', available: false }
  ];

  selectedMemoryId: string | null = '256';
  selectedColorId: string | null = 'black';

  readonly ROWS = [
    { variant: 'white' as const, label: 'White' },
    { variant: 'fill' as const, label: 'Fill' },
    { variant: 'black' as const, label: 'Black' },
  ] as const;

    // Hàm nhận dữ liệu khi filter thay đổi
  onFiltersChanged(filters: { from: number; to: number; selectedOptions: Record<string, string[]> }) {
    console.log('Dữ liệu filter nhận được:', filters);

    // 👇 Bạn có thể xử lý dữ liệu tại đây
    // ví dụ: gọi API, lọc danh sách sản phẩm, ...
    // this.productService.filterProducts(filters);
  }
}
