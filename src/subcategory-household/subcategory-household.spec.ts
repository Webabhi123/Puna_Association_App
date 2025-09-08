import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryHousehold } from './subcategory-household';

describe('SubcategoryHousehold', () => {
  let component: SubcategoryHousehold;
  let fixture: ComponentFixture<SubcategoryHousehold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryHousehold]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryHousehold);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
