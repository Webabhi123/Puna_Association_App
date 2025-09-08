import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularSwitches } from './modular-switches';

describe('ModularSwitches', () => {
  let component: ModularSwitches;
  let fixture: ComponentFixture<ModularSwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModularSwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModularSwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
