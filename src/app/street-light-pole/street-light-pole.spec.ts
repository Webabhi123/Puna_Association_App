import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetLightPole } from './street-light-pole';

describe('StreetLightPole', () => {
  let component: StreetLightPole;
  let fixture: ComponentFixture<StreetLightPole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreetLightPole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetLightPole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
