import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pumps } from './pumps';

describe('Pumps', () => {
  let component: Pumps;
  let fixture: ComponentFixture<Pumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
