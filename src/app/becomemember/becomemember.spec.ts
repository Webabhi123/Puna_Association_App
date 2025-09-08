import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Becomemember } from './becomemember';

describe('Becomemember', () => {
  let component: Becomemember;
  let fixture: ComponentFixture<Becomemember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Becomemember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Becomemember);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
