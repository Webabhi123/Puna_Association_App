import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceMeter } from './distance-meter';

describe('DistanceMeter', () => {
  let component: DistanceMeter;
  let fixture: ComponentFixture<DistanceMeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistanceMeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistanceMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
