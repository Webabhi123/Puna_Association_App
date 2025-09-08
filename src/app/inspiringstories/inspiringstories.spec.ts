import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspiringstories } from './inspiringstories';

describe('Inspiringstories', () => {
  let component: Inspiringstories;
  let fixture: ComponentFixture<Inspiringstories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inspiringstories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inspiringstories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
