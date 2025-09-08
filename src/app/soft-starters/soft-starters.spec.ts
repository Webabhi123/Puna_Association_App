import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftStarters } from './soft-starters';

describe('SoftStarters', () => {
  let component: SoftStarters;
  let fixture: ComponentFixture<SoftStarters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftStarters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftStarters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
