import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotarySwitch } from './rotary-switch';

describe('RotarySwitch', () => {
  let component: RotarySwitch;
  let fixture: ComponentFixture<RotarySwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotarySwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotarySwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
