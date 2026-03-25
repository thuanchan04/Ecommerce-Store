import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHT } from './menu-ht';

describe('MenuHT', () => {
  let component: MenuHT;
  let fixture: ComponentFixture<MenuHT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
