import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolGenerator } from './petrol-generator';

describe('PetrolGenerator', () => {
  let component: PetrolGenerator;
  let fixture: ComponentFixture<PetrolGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetrolGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetrolGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
