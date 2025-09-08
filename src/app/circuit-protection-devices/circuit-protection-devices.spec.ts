import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitProtectionDevices } from './circuit-protection-devices';

describe('CircuitProtectionDevices', () => {
  let component: CircuitProtectionDevices;
  let fixture: ComponentFixture<CircuitProtectionDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitProtectionDevices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitProtectionDevices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
