import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerFan } from './tower-fan';

describe('TowerFan', () => {
  let component: TowerFan;
  let fixture: ComponentFixture<TowerFan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerFan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowerFan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
