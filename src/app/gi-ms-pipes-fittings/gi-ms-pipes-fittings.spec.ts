import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiMsPipesFittings } from './gi-ms-pipes-fittings';

describe('GiMsPipesFittings', () => {
  let component: GiMsPipesFittings;
  let fixture: ComponentFixture<GiMsPipesFittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiMsPipesFittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiMsPipesFittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
