import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryHomeKitchenAppliances } from './subcategory-home-kitchen-appliances';

describe('SubcategoryHomeKitchenAppliances', () => {
  let component: SubcategoryHomeKitchenAppliances;
  let fixture: ComponentFixture<SubcategoryHomeKitchenAppliances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryHomeKitchenAppliances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryHomeKitchenAppliances);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
