import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMaterialWires } from './base-material-wires';

describe('BaseMaterialWires', () => {
  let component: BaseMaterialWires;
  let fixture: ComponentFixture<BaseMaterialWires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseMaterialWires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseMaterialWires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
