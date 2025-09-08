import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialHeaters } from './industrial-heaters';

describe('IndustrialHeaters', () => {
  let component: IndustrialHeaters;
  let fixture: ComponentFixture<IndustrialHeaters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialHeaters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialHeaters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
