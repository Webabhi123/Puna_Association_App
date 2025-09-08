import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relays } from './relays';

describe('Relays', () => {
  let component: Relays;
  let fixture: ComponentFixture<Relays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
