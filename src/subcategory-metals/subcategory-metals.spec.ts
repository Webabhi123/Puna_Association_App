import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryMetals } from './subcategory-metals';

describe('SubcategoryMetals', () => {
  let component: SubcategoryMetals;
  let fixture: ComponentFixture<SubcategoryMetals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryMetals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryMetals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
