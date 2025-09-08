import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cooker } from './cooker';

describe('Cooker', () => {
  let component: Cooker;
  let fixture: ComponentFixture<Cooker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cooker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cooker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
