import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilPump } from './oil-pump';

describe('OilPump', () => {
  let component: OilPump;
  let fixture: ComponentFixture<OilPump>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilPump]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilPump);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
