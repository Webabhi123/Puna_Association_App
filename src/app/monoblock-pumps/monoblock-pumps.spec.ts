import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoblockPumps } from './monoblock-pumps';

describe('MonoblockPumps', () => {
  let component: MonoblockPumps;
  let fixture: ComponentFixture<MonoblockPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonoblockPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonoblockPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
