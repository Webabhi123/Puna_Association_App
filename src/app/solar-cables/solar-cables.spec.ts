import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCables } from './solar-cables';

describe('SolarCables', () => {
  let component: SolarCables;
  let fixture: ComponentFixture<SolarCables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarCables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarCables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
