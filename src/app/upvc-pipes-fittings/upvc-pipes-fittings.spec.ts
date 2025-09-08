import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvcPipesFittings } from './upvc-pipes-fittings';

describe('UpvcPipesFittings', () => {
  let component: UpvcPipesFittings;
  let fixture: ComponentFixture<UpvcPipesFittings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpvcPipesFittings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvcPipesFittings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
