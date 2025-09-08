import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmouredCable } from './armoured-cable';

describe('ArmouredCable', () => {
  let component: ArmouredCable;
  let fixture: ComponentFixture<ArmouredCable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmouredCable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmouredCable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
