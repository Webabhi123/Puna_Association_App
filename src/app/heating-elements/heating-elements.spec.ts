import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingElements } from './heating-elements';

describe('HeatingElements', () => {
  let component: HeatingElements;
  let fixture: ComponentFixture<HeatingElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatingElements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingElements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
