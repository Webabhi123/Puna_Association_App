import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Need } from './need';

describe('Need', () => {
  let component: Need;
  let fixture: ComponentFixture<Need>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Need]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Need);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
