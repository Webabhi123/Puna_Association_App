import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmiAccessories } from './hmi-accessories';

describe('HmiAccessories', () => {
  let component: HmiAccessories;
  let fixture: ComponentFixture<HmiAccessories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmiAccessories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmiAccessories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
