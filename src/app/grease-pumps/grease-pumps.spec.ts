import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreasePumps } from './grease-pumps';

describe('GreasePumps', () => {
  let component: GreasePumps;
  let fixture: ComponentFixture<GreasePumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreasePumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreasePumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
