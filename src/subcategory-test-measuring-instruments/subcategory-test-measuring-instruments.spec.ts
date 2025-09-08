import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryTestMeasuringInstruments } from './subcategory-test-measuring-instruments';

describe('SubcategoryTestMeasuringInstruments', () => {
  let component: SubcategoryTestMeasuringInstruments;
  let fixture: ComponentFixture<SubcategoryTestMeasuringInstruments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryTestMeasuringInstruments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryTestMeasuringInstruments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
