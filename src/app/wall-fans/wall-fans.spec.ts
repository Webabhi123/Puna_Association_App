import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallFans } from './wall-fans';

describe('WallFans', () => {
  let component: WallFans;
  let fixture: ComponentFixture<WallFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
