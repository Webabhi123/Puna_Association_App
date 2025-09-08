import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryWiresCables } from './subcategory-wires-cables';

describe('SubcategoryWiresCables', () => {
  let component: SubcategoryWiresCables;
  let fixture: ComponentFixture<SubcategoryWiresCables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryWiresCables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryWiresCables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
