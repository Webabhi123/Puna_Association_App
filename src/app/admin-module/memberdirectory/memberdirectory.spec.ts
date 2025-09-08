import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memberdirectory } from './memberdirectory';

describe('Memberdirectory', () => {
  let component: Memberdirectory;
  let fixture: ComponentFixture<Memberdirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memberdirectory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Memberdirectory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
