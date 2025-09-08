import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedestalFans } from './pedestal-fans';

describe('PedestalFans', () => {
  let component: PedestalFans;
  let fixture: ComponentFixture<PedestalFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedestalFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedestalFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
