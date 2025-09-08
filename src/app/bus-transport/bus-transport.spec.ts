import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusTransport } from './bus-transport';

describe('BusTransport', () => {
  let component: BusTransport;
  let fixture: ComponentFixture<BusTransport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusTransport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusTransport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
