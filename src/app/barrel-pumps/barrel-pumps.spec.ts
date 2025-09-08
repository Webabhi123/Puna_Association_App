import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrelPumps } from './barrel-pumps';

describe('BarrelPumps', () => {
  let component: BarrelPumps;
  let fixture: ComponentFixture<BarrelPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrelPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrelPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
