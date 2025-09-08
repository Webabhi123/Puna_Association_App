import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichMakers } from './sandwich-makers';

describe('SandwichMakers', () => {
  let component: SandwichMakers;
  let fixture: ComponentFixture<SandwichMakers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandwichMakers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandwichMakers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
