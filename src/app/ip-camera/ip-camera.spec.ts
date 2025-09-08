import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCamera } from './ip-camera';

describe('IpCamera', () => {
  let component: IpCamera;
  let fixture: ComponentFixture<IpCamera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpCamera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpCamera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
