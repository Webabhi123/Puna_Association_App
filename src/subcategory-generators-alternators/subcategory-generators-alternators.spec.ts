import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryGeneratorsAlternators } from './subcategory-generators-alternators';

describe('SubcategoryGeneratorsAlternators', () => {
  let component: SubcategoryGeneratorsAlternators;
  let fixture: ComponentFixture<SubcategoryGeneratorsAlternators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryGeneratorsAlternators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryGeneratorsAlternators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
