import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvSwitchModePowerSupply } from './cctv-switch-mode-power-supply';

describe('CctvSwitchModePowerSupply', () => {
  let component: CctvSwitchModePowerSupply;
  let fixture: ComponentFixture<CctvSwitchModePowerSupply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CctvSwitchModePowerSupply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvSwitchModePowerSupply);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
