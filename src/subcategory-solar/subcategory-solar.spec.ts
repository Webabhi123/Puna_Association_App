import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorySolar } from './subcategory-solar';

describe('SubcategorySolar', () => {
  let component: SubcategorySolar;
  let fixture: ComponentFixture<SubcategorySolar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategorySolar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategorySolar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
