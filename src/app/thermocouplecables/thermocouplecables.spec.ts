import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thermocouplecables } from './thermocouplecables';

describe('Thermocouplecables', () => {
  let component: Thermocouplecables;
  let fixture: ComponentFixture<Thermocouplecables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thermocouplecables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thermocouplecables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
