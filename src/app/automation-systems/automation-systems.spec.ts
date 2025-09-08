import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationSystems } from './automation-systems';

describe('AutomationSystems', () => {
  let component: AutomationSystems;
  let fixture: ComponentFixture<AutomationSystems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationSystems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomationSystems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
