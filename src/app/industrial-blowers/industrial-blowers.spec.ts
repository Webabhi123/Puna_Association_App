import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialBlowers } from './industrial-blowers';

describe('IndustrialBlowers', () => {
  let component: IndustrialBlowers;
  let fixture: ComponentFixture<IndustrialBlowers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialBlowers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialBlowers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
