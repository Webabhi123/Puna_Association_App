import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BldcFans } from './bldc-fans';

describe('BldcFans', () => {
  let component: BldcFans;
  let fixture: ComponentFixture<BldcFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BldcFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BldcFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
