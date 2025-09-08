import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impellers } from './impellers';

describe('Impellers', () => {
  let component: Impellers;
  let fixture: ComponentFixture<Impellers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impellers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impellers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
