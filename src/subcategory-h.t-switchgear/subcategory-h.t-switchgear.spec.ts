import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryHTSwitchgear } from './subcategory-h.t-switchgear';

describe('SubcategoryHTSwitchgear', () => {
  let component: SubcategoryHTSwitchgear;
  let fixture: ComponentFixture<SubcategoryHTSwitchgear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryHTSwitchgear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryHTSwitchgear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
