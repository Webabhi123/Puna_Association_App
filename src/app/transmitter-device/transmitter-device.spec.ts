import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitterDevice } from './transmitter-device';

describe('TransmitterDevice', () => {
  let component: TransmitterDevice;
  let fixture: ComponentFixture<TransmitterDevice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmitterDevice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmitterDevice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
