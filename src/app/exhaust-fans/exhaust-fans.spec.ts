import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustFans } from './exhaust-fans';

describe('ExhaustFans', () => {
  let component: ExhaustFans;
  let fixture: ComponentFixture<ExhaustFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
