import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorySwitchgear } from './subcategory-switchgear';

describe('SubcategorySwitchgear', () => {
  let component: SubcategorySwitchgear;
  let fixture: ComponentFixture<SubcategorySwitchgear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategorySwitchgear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategorySwitchgear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
