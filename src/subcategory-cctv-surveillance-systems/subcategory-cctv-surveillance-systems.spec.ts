import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryCctvSurveillanceSystems } from './subcategory-cctv-surveillance-systems';

describe('SubcategoryCctvSurveillanceSystems', () => {
  let component: SubcategoryCctvSurveillanceSystems;
  let fixture: ComponentFixture<SubcategoryCctvSurveillanceSystems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryCctvSurveillanceSystems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryCctvSurveillanceSystems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
