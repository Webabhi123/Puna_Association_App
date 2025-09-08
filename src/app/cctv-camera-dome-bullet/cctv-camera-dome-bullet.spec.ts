import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvCameraDomeBullet } from './cctv-camera-dome-bullet';

describe('CctvCameraDomeBullet', () => {
  let component: CctvCameraDomeBullet;
  let fixture: ComponentFixture<CctvCameraDomeBullet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CctvCameraDomeBullet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvCameraDomeBullet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
