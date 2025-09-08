import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSpecificWires } from './application-specific-wires';

describe('ApplicationSpecificWires', () => {
  let component: ApplicationSpecificWires;
  let fixture: ComponentFixture<ApplicationSpecificWires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationSpecificWires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationSpecificWires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
