import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalCamera } from './thermal-camera';

describe('ThermalCamera', () => {
  let component: ThermalCamera;
  let fixture: ComponentFixture<ThermalCamera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermalCamera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermalCamera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
