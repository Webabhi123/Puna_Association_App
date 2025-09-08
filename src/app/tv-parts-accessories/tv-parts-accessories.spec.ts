import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPartsAccessories } from './tv-parts-accessories';

describe('TvPartsAccessories', () => {
  let component: TvPartsAccessories;
  let fixture: ComponentFixture<TvPartsAccessories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvPartsAccessories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvPartsAccessories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
