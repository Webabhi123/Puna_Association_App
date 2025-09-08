import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearedMotor } from './geared-motor';

describe('GearedMotor', () => {
  let component: GearedMotor;
  let fixture: ComponentFixture<GearedMotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearedMotor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearedMotor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
