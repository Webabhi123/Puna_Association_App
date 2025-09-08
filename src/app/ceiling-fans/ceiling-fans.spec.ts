import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingFans } from './ceiling-fans';

describe('CeilingFans', () => {
  let component: CeilingFans;
  let fixture: ComponentFixture<CeilingFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeilingFans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeilingFans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
