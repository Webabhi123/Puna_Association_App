import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPressurePumps } from './high-pressure-pumps';

describe('HighPressurePumps', () => {
  let component: HighPressurePumps;
  let fixture: ComponentFixture<HighPressurePumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighPressurePumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighPressurePumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
