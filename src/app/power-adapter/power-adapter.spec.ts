import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerAdapter } from './power-adapter';

describe('PowerAdapter', () => {
  let component: PowerAdapter;
  let fixture: ComponentFixture<PowerAdapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerAdapter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerAdapter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
