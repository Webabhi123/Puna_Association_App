import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf6CircuitBreaker } from './sf6-circuit-breaker';

describe('Sf6CircuitBreaker', () => {
  let component: Sf6CircuitBreaker;
  let fixture: ComponentFixture<Sf6CircuitBreaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sf6CircuitBreaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sf6CircuitBreaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
