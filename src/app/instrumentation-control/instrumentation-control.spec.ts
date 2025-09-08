import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentationControl } from './instrumentation-control';

describe('InstrumentationControl', () => {
  let component: InstrumentationControl;
  let fixture: ComponentFixture<InstrumentationControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentationControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentationControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
