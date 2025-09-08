import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewageSubmersiblePumps } from './sewage-submersible-pumps';

describe('SewageSubmersiblePumps', () => {
  let component: SewageSubmersiblePumps;
  let fixture: ComponentFixture<SewageSubmersiblePumps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SewageSubmersiblePumps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SewageSubmersiblePumps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
