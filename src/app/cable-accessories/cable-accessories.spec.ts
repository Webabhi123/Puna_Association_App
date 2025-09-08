import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableAccessories } from './cable-accessories';

describe('CableAccessories', () => {
  let component: CableAccessories;
  let fixture: ComponentFixture<CableAccessories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CableAccessories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CableAccessories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
