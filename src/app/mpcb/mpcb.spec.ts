import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mpcb } from './mpcb';

describe('Mpcb', () => {
  let component: Mpcb;
  let fixture: ComponentFixture<Mpcb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mpcb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mpcb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
