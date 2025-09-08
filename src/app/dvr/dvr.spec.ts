import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dvr } from './dvr';

describe('Dvr', () => {
  let component: Dvr;
  let fixture: ComponentFixture<Dvr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dvr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dvr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
