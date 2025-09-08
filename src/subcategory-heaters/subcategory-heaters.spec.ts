import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryHeaters } from './subcategory-heaters';

describe('SubcategoryHeaters', () => {
  let component: SubcategoryHeaters;
  let fixture: ComponentFixture<SubcategoryHeaters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryHeaters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryHeaters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
