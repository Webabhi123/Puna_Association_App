import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveillanceSystems } from './surveillance-systems';

describe('SurveillanceSystems', () => {
  let component: SurveillanceSystems;
  let fixture: ComponentFixture<SurveillanceSystems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveillanceSystems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveillanceSystems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
