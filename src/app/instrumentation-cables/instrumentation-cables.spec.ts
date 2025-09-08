import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentationCables } from './instrumentation-cables';

describe('InstrumentationCables', () => {
  let component: InstrumentationCables;
  let fixture: ComponentFixture<InstrumentationCables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentationCables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentationCables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
