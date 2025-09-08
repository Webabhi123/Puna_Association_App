import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMachine } from './washing-machine';

describe('WashingMachine', () => {
  let component: WashingMachine;
  let fixture: ComponentFixture<WashingMachine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashingMachine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WashingMachine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
