import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccumCleaner } from './vaccum-cleaner';

describe('VaccumCleaner', () => {
  let component: VaccumCleaner;
  let fixture: ComponentFixture<VaccumCleaner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaccumCleaner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccumCleaner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
