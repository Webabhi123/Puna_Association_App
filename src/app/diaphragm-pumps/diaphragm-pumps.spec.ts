import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaphragmPumps } from './diaphragm-pumps';

describe('DiaphragmPumps', () => {
  let component: DiaphragmPumps;
  let fixture: ComponentFixture<DiaphragmPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaphragmPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaphragmPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
