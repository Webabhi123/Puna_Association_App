import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blenders } from './blenders';

describe('Blenders', () => {
  let component: Blenders;
  let fixture: ComponentFixture<Blenders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blenders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blenders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
