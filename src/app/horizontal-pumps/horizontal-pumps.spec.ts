import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPumps } from './horizontal-pumps';

describe('HorizontalPumps', () => {
  let component: HorizontalPumps;
  let fixture: ComponentFixture<HorizontalPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
