import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotiMakers } from './roti-makers';

describe('RotiMakers', () => {
  let component: RotiMakers;
  let fixture: ComponentFixture<RotiMakers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotiMakers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotiMakers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
