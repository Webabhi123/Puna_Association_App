import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tachometers } from './tachometers';

describe('Tachometers', () => {
  let component: Tachometers;
  let fixture: ComponentFixture<Tachometers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tachometers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tachometers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
