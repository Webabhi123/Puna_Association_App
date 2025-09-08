import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpabxSystem } from './epabx-system';

describe('EpabxSystem', () => {
  let component: EpabxSystem;
  let fixture: ComponentFixture<EpabxSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpabxSystem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpabxSystem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
