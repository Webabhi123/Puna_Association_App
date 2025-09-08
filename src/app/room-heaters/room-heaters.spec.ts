import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHeaters } from './room-heaters';

describe('RoomHeaters', () => {
  let component: RoomHeaters;
  let fixture: ComponentFixture<RoomHeaters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomHeaters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomHeaters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
