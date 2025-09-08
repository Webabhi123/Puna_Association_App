import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryInverterUpsStabilizers } from './subcategory-inverter-ups-stabilizers';

describe('SubcategoryInverterUpsStabilizers', () => {
  let component: SubcategoryInverterUpsStabilizers;
  let fixture: ComponentFixture<SubcategoryInverterUpsStabilizers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryInverterUpsStabilizers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryInverterUpsStabilizers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
