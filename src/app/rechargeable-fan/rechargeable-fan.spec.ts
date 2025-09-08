import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeableFan } from './rechargeable-fan';

describe('RechargeableFan', () => {
  let component: RechargeableFan;
  let fixture: ComponentFixture<RechargeableFan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeableFan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeableFan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
