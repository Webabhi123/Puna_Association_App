import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPrimingPumps } from './self-priming-pumps';

describe('SelfPrimingPumps', () => {
  let component: SelfPrimingPumps;
  let fixture: ComponentFixture<SelfPrimingPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfPrimingPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfPrimingPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
