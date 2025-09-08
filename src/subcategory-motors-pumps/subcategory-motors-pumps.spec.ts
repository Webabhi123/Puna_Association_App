import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryMotorsPumps } from './subcategory-motors-pumps';

describe('SubcategoryMotorsPumps', () => {
  let component: SubcategoryMotorsPumps;
  let fixture: ComponentFixture<SubcategoryMotorsPumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryMotorsPumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryMotorsPumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
