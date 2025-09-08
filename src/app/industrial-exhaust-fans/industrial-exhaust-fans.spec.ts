import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialExhaustFans } from './industrial-exhaust-fans';

describe('IndustrialExhaustFans', () => {
  let component: IndustrialExhaustFans;
  let fixture: ComponentFixture<IndustrialExhaustFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrialExhaustFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialExhaustFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
