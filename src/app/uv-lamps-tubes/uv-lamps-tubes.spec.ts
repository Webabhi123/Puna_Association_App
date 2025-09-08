import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvLampsTubes } from './uv-lamps-tubes';

describe('UvLampsTubes', () => {
  let component: UvLampsTubes;
  let fixture: ComponentFixture<UvLampsTubes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvLampsTubes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvLampsTubes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
