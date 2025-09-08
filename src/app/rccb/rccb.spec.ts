import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rccb } from './rccb';

describe('Rccb', () => {
  let component: Rccb;
  let fixture: ComponentFixture<Rccb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rccb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rccb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
