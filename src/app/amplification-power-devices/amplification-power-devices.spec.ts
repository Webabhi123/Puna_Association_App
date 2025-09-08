import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplificationPowerDevices } from './amplification-power-devices';

describe('AmplificationPowerDevices', () => {
  let component: AmplificationPowerDevices;
  let fixture: ComponentFixture<AmplificationPowerDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmplificationPowerDevices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmplificationPowerDevices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
