import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyinitiative } from './keyinitiative';

describe('Keyinitiative', () => {
  let component: Keyinitiative;
  let fixture: ComponentFixture<Keyinitiative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyinitiative]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyinitiative);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
