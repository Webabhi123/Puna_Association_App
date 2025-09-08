import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryDomesticFansAcCoolers } from './subcategory-domestic-fans-ac-coolers';

describe('SubcategoryDomesticFansAcCoolers', () => {
  let component: SubcategoryDomesticFansAcCoolers;
  let fixture: ComponentFixture<SubcategoryDomesticFansAcCoolers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryDomesticFansAcCoolers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryDomesticFansAcCoolers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
