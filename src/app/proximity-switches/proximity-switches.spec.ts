import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximitySwitches } from './proximity-switches';

describe('ProximitySwitches', () => {
  let component: ProximitySwitches;
  let fixture: ComponentFixture<ProximitySwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximitySwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximitySwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
