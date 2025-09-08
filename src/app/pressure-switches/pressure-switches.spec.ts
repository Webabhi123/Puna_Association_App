import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureSwitches } from './pressure-switches';

describe('PressureSwitches', () => {
  let component: PressureSwitches;
  let fixture: ComponentFixture<PressureSwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressureSwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressureSwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
