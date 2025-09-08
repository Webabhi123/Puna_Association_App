import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryLightingFancyFittings } from './subcategory-lighting-fancy-fittings';

describe('SubcategoryLightingFancyFittings', () => {
  let component: SubcategoryLightingFancyFittings;
  let fixture: ComponentFixture<SubcategoryLightingFancyFittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryLightingFancyFittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryLightingFancyFittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
