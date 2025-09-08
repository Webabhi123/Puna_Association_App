import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorchesEmergencyLight } from './torches-emergency-light';

describe('TorchesEmergencyLight', () => {
  let component: TorchesEmergencyLight;
  let fixture: ComponentFixture<TorchesEmergencyLight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorchesEmergencyLight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorchesEmergencyLight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
