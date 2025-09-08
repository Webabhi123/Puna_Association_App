import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoistureMeter } from './moisture-meter';

describe('MoistureMeter', () => {
  let component: MoistureMeter;
  let fixture: ComponentFixture<MoistureMeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoistureMeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoistureMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
