import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayTransport } from './railway-transport';

describe('RailwayTransport', () => {
  let component: RailwayTransport;
  let fixture: ComponentFixture<RailwayTransport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RailwayTransport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailwayTransport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
