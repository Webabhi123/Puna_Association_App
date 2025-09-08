import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingMainUnit } from './ring-main-unit';

describe('RingMainUnit', () => {
  let component: RingMainUnit;
  let fixture: ComponentFixture<RingMainUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RingMainUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingMainUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
