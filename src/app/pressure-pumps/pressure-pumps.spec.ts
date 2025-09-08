import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressurePumps } from './pressure-pumps';

describe('PressurePumps', () => {
  let component: PressurePumps;
  let fixture: ComponentFixture<PressurePumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressurePumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressurePumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
