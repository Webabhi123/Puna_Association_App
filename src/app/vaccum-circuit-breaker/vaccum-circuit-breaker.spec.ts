import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccumCircuitBreaker } from './vaccum-circuit-breaker';

describe('VaccumCircuitBreaker', () => {
  let component: VaccumCircuitBreaker;
  let fixture: ComponentFixture<VaccumCircuitBreaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccumCircuitBreaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccumCircuitBreaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
