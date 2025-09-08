import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PneumaticPumps } from './pneumatic-pumps';

describe('PneumaticPumps', () => {
  let component: PneumaticPumps;
  let fixture: ComponentFixture<PneumaticPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PneumaticPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PneumaticPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
