import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTheaterSpeakerSystem } from './home-theater-speaker-system';

describe('HomeTheaterSpeakerSystem', () => {
  let component: HomeTheaterSpeakerSystem;
  let fixture: ComponentFixture<HomeTheaterSpeakerSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTheaterSpeakerSystem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTheaterSpeakerSystem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
