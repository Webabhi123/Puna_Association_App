import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedLightFittings } from './led-light-fittings';

describe('LedLightFittings', () => {
  let component: LedLightFittings;
  let fixture: ComponentFixture<LedLightFittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedLightFittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedLightFittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
