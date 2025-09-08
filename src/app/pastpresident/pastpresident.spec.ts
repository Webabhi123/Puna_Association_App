import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastpresident } from './pastpresident';

describe('Pastpresident', () => {
  let component: Pastpresident;
  let fixture: ComponentFixture<Pastpresident>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastpresident]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastpresident);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
