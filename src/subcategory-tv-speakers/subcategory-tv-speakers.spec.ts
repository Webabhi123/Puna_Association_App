import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryTvSpeakers } from './subcategory-tv-speakers';

describe('SubcategoryTvSpeakers', () => {
  let component: SubcategoryTvSpeakers;
  let fixture: ComponentFixture<SubcategoryTvSpeakers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryTvSpeakers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryTvSpeakers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
