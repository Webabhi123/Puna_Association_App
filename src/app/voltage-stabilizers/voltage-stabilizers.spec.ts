import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageStabilizers } from './voltage-stabilizers';

describe('VoltageStabilizers', () => {
  let component: VoltageStabilizers;
  let fixture: ComponentFixture<VoltageStabilizers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoltageStabilizers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoltageStabilizers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
