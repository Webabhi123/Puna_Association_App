import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventcalendars } from './eventcalendars';

describe('Eventcalendars', () => {
  let component: Eventcalendars;
  let fixture: ComponentFixture<Eventcalendars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventcalendars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventcalendars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
