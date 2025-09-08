import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actuators } from './actuators';

describe('Actuators', () => {
  let component: Actuators;
  let fixture: ComponentFixture<Actuators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actuators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actuators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
