import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProcessor } from './food-processor';

describe('FoodProcessor', () => {
  let component: FoodProcessor;
  let fixture: ComponentFixture<FoodProcessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodProcessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodProcessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
