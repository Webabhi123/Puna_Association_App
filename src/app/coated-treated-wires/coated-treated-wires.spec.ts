import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatedTreatedWires } from './coated-treated-wires';

describe('CoatedTreatedWires', () => {
  let component: CoatedTreatedWires;
  let fixture: ComponentFixture<CoatedTreatedWires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoatedTreatedWires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoatedTreatedWires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
