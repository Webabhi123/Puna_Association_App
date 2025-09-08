import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mcb } from './mcb';

describe('Mcb', () => {
  let component: Mcb;
  let fixture: ComponentFixture<Mcb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mcb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mcb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
