import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryMiscellaneousElectricalItem } from './subcategory-miscellaneous-electrical-item';

describe('SubcategoryMiscellaneousElectricalItem', () => {
  let component: SubcategoryMiscellaneousElectricalItem;
  let fixture: ComponentFixture<SubcategoryMiscellaneousElectricalItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryMiscellaneousElectricalItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryMiscellaneousElectricalItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
