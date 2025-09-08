import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronousMotor } from './synchronous-motor';

describe('SynchronousMotor', () => {
  let component: SynchronousMotor;
  let fixture: ComponentFixture<SynchronousMotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynchronousMotor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchronousMotor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
