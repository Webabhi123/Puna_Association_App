import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presidentsdesk } from './presidentsdesk';

describe('Presidentsdesk', () => {
  let component: Presidentsdesk;
  let fixture: ComponentFixture<Presidentsdesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presidentsdesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Presidentsdesk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
