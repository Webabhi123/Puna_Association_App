import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirConditioners } from './air-conditioners';

describe('AirConditioners', () => {
  let component: AirConditioners;
  let fixture: ComponentFixture<AirConditioners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirConditioners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirConditioners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
