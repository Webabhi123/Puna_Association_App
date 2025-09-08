import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPumps } from './water-pumps';

describe('WaterPumps', () => {
  let component: WaterPumps;
  let fixture: ComponentFixture<WaterPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
