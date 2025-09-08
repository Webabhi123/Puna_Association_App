import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iron } from './iron';

describe('Iron', () => {
  let component: Iron;
  let fixture: ComponentFixture<Iron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iron);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
