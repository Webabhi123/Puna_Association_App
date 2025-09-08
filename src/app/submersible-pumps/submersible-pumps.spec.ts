import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmersiblePumps } from './submersible-pumps';

describe('SubmersiblePumps', () => {
  let component: SubmersiblePumps;
  let fixture: ComponentFixture<SubmersiblePumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmersiblePumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmersiblePumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
