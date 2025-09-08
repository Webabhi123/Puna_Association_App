import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageRegulator } from './voltage-regulator';

describe('VoltageRegulator', () => {
  let component: VoltageRegulator;
  let fixture: ComponentFixture<VoltageRegulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoltageRegulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoltageRegulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
