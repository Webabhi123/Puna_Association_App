import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricWaterGeyser } from './electric-water-geyser';

describe('ElectricWaterGeyser', () => {
  let component: ElectricWaterGeyser;
  let fixture: ComponentFixture<ElectricWaterGeyser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricWaterGeyser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricWaterGeyser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
