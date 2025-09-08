import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ups } from './ups';

describe('Ups', () => {
  let component: Ups;
  let fixture: ComponentFixture<Ups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
