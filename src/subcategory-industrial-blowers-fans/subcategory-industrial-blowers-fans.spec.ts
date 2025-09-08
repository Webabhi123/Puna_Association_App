import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryIndustrialBlowersFans } from './subcategory-industrial-blowers-fans';

describe('SubcategoryIndustrialBlowersFans', () => {
  let component: SubcategoryIndustrialBlowersFans;
  let fixture: ComponentFixture<SubcategoryIndustrialBlowersFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryIndustrialBlowersFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryIndustrialBlowersFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
