import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allianceinternational } from './allianceinternational';

describe('Allianceinternational', () => {
  let component: Allianceinternational;
  let fixture: ComponentFixture<Allianceinternational>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allianceinternational]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allianceinternational);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
