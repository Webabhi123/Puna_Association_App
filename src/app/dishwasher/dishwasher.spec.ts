import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dishwasher } from './dishwasher';

describe('Dishwasher', () => {
  let component: Dishwasher;
  let fixture: ComponentFixture<Dishwasher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dishwasher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dishwasher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
