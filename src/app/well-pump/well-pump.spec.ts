import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellPump } from './well-pump';

describe('WellPump', () => {
  let component: WellPump;
  let fixture: ComponentFixture<WellPump>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellPump]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellPump);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
