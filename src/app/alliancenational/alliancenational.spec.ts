import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alliancenational } from './alliancenational';

describe('Alliancenational', () => {
  let component: Alliancenational;
  let fixture: ComponentFixture<Alliancenational>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alliancenational]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alliancenational);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
