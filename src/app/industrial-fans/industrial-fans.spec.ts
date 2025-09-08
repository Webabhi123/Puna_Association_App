import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialFans } from './industrial-fans';

describe('IndustrialFans', () => {
  let component: IndustrialFans;
  let fixture: ComponentFixture<IndustrialFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
