import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalPumps } from './vertical-pumps';

describe('VerticalPumps', () => {
  let component: VerticalPumps;
  let fixture: ComponentFixture<VerticalPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
