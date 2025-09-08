import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisheyeCamera } from './fisheye-camera';

describe('FisheyeCamera', () => {
  let component: FisheyeCamera;
  let fixture: ComponentFixture<FisheyeCamera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisheyeCamera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisheyeCamera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
