import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewPumps } from './screw-pumps';

describe('ScrewPumps', () => {
  let component: ScrewPumps;
  let fixture: ComponentFixture<ScrewPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrewPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrewPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
