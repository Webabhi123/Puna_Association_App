import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miscellaneous } from './miscellaneous';

describe('Miscellaneous', () => {
  let component: Miscellaneous;
  let fixture: ComponentFixture<Miscellaneous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miscellaneous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Miscellaneous);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
