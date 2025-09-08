import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiconductorFuses } from './semiconductor-fuses';

describe('SemiconductorFuses', () => {
  let component: SemiconductorFuses;
  let fixture: ComponentFixture<SemiconductorFuses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiconductorFuses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiconductorFuses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
