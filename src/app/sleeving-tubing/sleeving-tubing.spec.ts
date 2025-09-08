import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleevingTubing } from './sleeving-tubing';

describe('SleevingTubing', () => {
  let component: SleevingTubing;
  let fixture: ComponentFixture<SleevingTubing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SleevingTubing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SleevingTubing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
