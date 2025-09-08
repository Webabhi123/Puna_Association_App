import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memberlogin } from './memberlogin';

describe('Memberlogin', () => {
  let component: Memberlogin;
  let fixture: ComponentFixture<Memberlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memberlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Memberlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
