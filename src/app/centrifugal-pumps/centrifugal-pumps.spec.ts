import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrifugalPumps } from './centrifugal-pumps';

describe('CentrifugalPumps', () => {
  let component: CentrifugalPumps;
  let fixture: ComponentFixture<CentrifugalPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrifugalPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrifugalPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
