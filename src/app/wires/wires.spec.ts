import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wires } from './wires';

describe('Wires', () => {
  let component: Wires;
  let fixture: ComponentFixture<Wires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
