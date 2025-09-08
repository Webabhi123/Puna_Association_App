import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSparesParts } from './fan-spares-parts';

describe('FanSparesParts', () => {
  let component: FanSparesParts;
  let fixture: ComponentFixture<FanSparesParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanSparesParts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanSparesParts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
