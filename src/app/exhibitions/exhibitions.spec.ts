import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exhibitions } from './exhibitions';

describe('Exhibitions', () => {
  let component: Exhibitions;
  let fixture: ComponentFixture<Exhibitions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exhibitions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exhibitions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
