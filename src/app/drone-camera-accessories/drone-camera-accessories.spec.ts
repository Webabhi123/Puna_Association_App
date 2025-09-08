import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneCameraAccessories } from './drone-camera-accessories';

describe('DroneCameraAccessories', () => {
  let component: DroneCameraAccessories;
  let fixture: ComponentFixture<DroneCameraAccessories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneCameraAccessories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneCameraAccessories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
