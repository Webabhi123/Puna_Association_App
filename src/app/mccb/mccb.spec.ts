import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mccb } from './mccb';

describe('Mccb', () => {
  let component: Mccb;
  let fixture: ComponentFixture<Mccb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mccb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mccb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
