import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcAccessories } from './plc-accessories';

describe('PlcAccessories', () => {
  let component: PlcAccessories;
  let fixture: ComponentFixture<PlcAccessories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlcAccessories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlcAccessories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
