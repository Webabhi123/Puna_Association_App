import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarLedProducts } from './solar-led-products';

describe('SolarLedProducts', () => {
  let component: SolarLedProducts;
  let fixture: ComponentFixture<SolarLedProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarLedProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarLedProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
