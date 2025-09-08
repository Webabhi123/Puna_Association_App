import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatorParts } from './alternator-parts';

describe('AlternatorParts', () => {
  let component: AlternatorParts;
  let fixture: ComponentFixture<AlternatorParts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternatorParts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternatorParts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
