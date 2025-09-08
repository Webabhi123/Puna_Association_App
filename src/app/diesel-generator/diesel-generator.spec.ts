import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselGenerator } from './diesel-generator';

describe('DieselGenerator', () => {
  let component: DieselGenerator;
  let fixture: ComponentFixture<DieselGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DieselGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieselGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
