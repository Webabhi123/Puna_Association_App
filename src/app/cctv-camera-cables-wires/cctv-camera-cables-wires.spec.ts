import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvCameraCablesWires } from './cctv-camera-cables-wires';

describe('CctvCameraCablesWires', () => {
  let component: CctvCameraCablesWires;
  let fixture: ComponentFixture<CctvCameraCablesWires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CctvCameraCablesWires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvCameraCablesWires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
