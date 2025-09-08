import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricAcMotors } from './electric-ac-motors';

describe('ElectricAcMotors', () => {
  let component: ElectricAcMotors;
  let fixture: ComponentFixture<ElectricAcMotors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricAcMotors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricAcMotors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
