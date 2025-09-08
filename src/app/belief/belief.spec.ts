import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Belief } from './belief';

describe('Belief', () => {
  let component: Belief;
  let fixture: ComponentFixture<Belief>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Belief]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Belief);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
