import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeMakers } from './coffee-makers';

describe('CoffeeMakers', () => {
  let component: CoffeeMakers;
  let fixture: ComponentFixture<CoffeeMakers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeMakers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeMakers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
