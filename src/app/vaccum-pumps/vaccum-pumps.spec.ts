import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccumPumps } from './vaccum-pumps';

describe('VaccumPumps', () => {
  let component: VaccumPumps;
  let fixture: ComponentFixture<VaccumPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccumPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccumPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
