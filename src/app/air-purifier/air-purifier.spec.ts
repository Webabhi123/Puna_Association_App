import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPurifier } from './air-purifier';

describe('AirPurifier', () => {
  let component: AirPurifier;
  let fixture: ComponentFixture<AirPurifier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirPurifier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirPurifier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
