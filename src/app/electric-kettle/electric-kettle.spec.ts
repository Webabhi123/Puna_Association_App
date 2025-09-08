import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricKettle } from './electric-kettle';

describe('ElectricKettle', () => {
  let component: ElectricKettle;
  let fixture: ComponentFixture<ElectricKettle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricKettle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricKettle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
