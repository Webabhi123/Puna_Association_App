import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inverters } from './inverters';

describe('Inverters', () => {
  let component: Inverters;
  let fixture: ComponentFixture<Inverters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inverters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inverters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
