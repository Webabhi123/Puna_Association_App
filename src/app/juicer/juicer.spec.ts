import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juicer } from './juicer';

describe('Juicer', () => {
  let component: Juicer;
  let fixture: ComponentFixture<Juicer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Juicer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juicer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
