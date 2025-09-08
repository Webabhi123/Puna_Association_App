import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcMotor } from './dc-motor';

describe('DcMotor', () => {
  let component: DcMotor;
  let fixture: ComponentFixture<DcMotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcMotor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcMotor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
