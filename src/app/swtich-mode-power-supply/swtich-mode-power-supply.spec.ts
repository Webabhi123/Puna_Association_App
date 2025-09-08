import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwtichModePowerSupply } from './swtich-mode-power-supply';

describe('SwtichModePowerSupply', () => {
  let component: SwtichModePowerSupply;
  let fixture: ComponentFixture<SwtichModePowerSupply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwtichModePowerSupply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwtichModePowerSupply);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
