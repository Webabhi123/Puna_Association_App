import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenChimney } from './kitchen-chimney';

describe('KitchenChimney', () => {
  let component: KitchenChimney;
  let fixture: ComponentFixture<KitchenChimney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenChimney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenChimney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
