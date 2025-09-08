import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acb } from './acb';

describe('Acb', () => {
  let component: Acb;
  let fixture: ComponentFixture<Acb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
