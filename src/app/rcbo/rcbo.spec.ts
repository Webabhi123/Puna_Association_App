import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rcbo } from './rcbo';

describe('Rcbo', () => {
  let component: Rcbo;
  let fixture: ComponentFixture<Rcbo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rcbo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rcbo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
