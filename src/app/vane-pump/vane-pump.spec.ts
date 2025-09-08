import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanePump } from './vane-pump';

describe('VanePump', () => {
  let component: VanePump;
  let fixture: ComponentFixture<VanePump>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanePump]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanePump);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
