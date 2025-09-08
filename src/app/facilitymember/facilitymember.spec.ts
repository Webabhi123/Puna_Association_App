import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facilitymember } from './facilitymember';

describe('Facilitymember', () => {
  let component: Facilitymember;
  let fixture: ComponentFixture<Facilitymember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Facilitymember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Facilitymember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
