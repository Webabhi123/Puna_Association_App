import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAds } from './manage-ads';

describe('ManageAds', () => {
  let component: ManageAds;
  let fixture: ComponentFixture<ManageAds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
