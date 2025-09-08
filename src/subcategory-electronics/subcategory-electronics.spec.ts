import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryElectronics } from './subcategory-electronics';

describe('SubcategoryElectronics', () => {
  let component: SubcategoryElectronics;
  let fixture: ComponentFixture<SubcategoryElectronics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcategoryElectronics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryElectronics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
