import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aimsobjective } from './aimsobjective';

describe('Aimsobjective', () => {
  let component: Aimsobjective;
  let fixture: ComponentFixture<Aimsobjective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aimsobjective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aimsobjective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
