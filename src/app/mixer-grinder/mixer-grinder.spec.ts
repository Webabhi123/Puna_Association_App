import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixerGrinder } from './mixer-grinder';

describe('MixerGrinder', () => {
  let component: MixerGrinder;
  let fixture: ComponentFixture<MixerGrinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixerGrinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixerGrinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
