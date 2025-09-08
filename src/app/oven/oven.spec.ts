import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oven } from './oven';

describe('Oven', () => {
  let component: Oven;
  let fixture: ComponentFixture<Oven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
