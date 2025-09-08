import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosingPumps } from './dosing-pumps';

describe('DosingPumps', () => {
  let component: DosingPumps;
  let fixture: ComponentFixture<DosingPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DosingPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosingPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
