import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryAutomation } from './subcategory-automation';

describe('SubcategoryAutomation', () => {
  let component: SubcategoryAutomation;
  let fixture: ComponentFixture<SubcategoryAutomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryAutomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryAutomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
