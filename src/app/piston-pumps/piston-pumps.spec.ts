import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PistonPumps } from './piston-pumps';

describe('PistonPumps', () => {
  let component: PistonPumps;
  let fixture: ComponentFixture<PistonPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PistonPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PistonPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
