import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearPump } from './gear-pump';

describe('GearPump', () => {
  let component: GearPump;
  let fixture: ComponentFixture<GearPump>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearPump]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearPump);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
