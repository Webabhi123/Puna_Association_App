import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTransport } from './logistics-transport';

describe('LogisticsTransport', () => {
  let component: LogisticsTransport;
  let fixture: ComponentFixture<LogisticsTransport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsTransport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsTransport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
