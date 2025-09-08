import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleCable } from './flexible-cable';

describe('FlexibleCable', () => {
  let component: FlexibleCable;
  let fixture: ComponentFixture<FlexibleCable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexibleCable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexibleCable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
