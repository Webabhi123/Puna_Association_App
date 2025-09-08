import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSwitches } from './limit-switches';

describe('LimitSwitches', () => {
  let component: LimitSwitches;
  let fixture: ComponentFixture<LimitSwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitSwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitSwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
