import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryPumps } from './rotary-pumps';

describe('RotaryPumps', () => {
  let component: RotaryPumps;
  let fixture: ComponentFixture<RotaryPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaryPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaryPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
