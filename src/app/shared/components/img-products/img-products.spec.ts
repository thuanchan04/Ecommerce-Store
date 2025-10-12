import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProducts } from './img-products';

describe('ImgProducts', () => {
  let component: ImgProducts;
  let fixture: ComponentFixture<ImgProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
