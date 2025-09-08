import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanels } from './control-panels';

describe('ControlPanels', () => {
  let component: ControlPanels;
  let fixture: ComponentFixture<ControlPanels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPanels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPanels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
