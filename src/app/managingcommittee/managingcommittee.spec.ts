import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managingcommittee } from './managingcommittee';

describe('Managingcommittee', () => {
  let component: Managingcommittee;
  let fixture: ComponentFixture<Managingcommittee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Managingcommittee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managingcommittee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
