import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFryer } from './air-fryer';

describe('AirFryer', () => {
  let component: AirFryer;
  let fixture: ComponentFixture<AirFryer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirFryer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirFryer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
