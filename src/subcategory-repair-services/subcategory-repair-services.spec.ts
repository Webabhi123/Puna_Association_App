import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryRepairServices } from './subcategory-repair-services';

describe('SubcategoryRepairServices', () => {
  let component: SubcategoryRepairServices;
  let fixture: ComponentFixture<SubcategoryRepairServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryRepairServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryRepairServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
