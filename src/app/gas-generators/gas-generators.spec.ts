import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasGenerators } from './gas-generators';

describe('GasGenerators', () => {
  let component: GasGenerators;
  let fixture: ComponentFixture<GasGenerators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasGenerators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasGenerators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
