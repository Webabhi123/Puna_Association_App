import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmdcMotor } from './pmdc-motor';

describe('PmdcMotor', () => {
  let component: PmdcMotor;
  let fixture: ComponentFixture<PmdcMotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmdcMotor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmdcMotor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
