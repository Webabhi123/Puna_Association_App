import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTransportData } from './logistics-transport-data';

describe('LogisticsTransportData', () => {
  let component: LogisticsTransportData;
  let fixture: ComponentFixture<LogisticsTransportData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsTransportData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsTransportData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
