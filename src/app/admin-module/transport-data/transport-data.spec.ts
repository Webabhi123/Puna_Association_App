import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportData } from './transport-data';

describe('TransportData', () => {
  let component: TransportData;
  let fixture: ComponentFixture<TransportData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
