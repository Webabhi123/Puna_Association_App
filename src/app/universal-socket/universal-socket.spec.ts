import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSocket } from './universal-socket';

describe('UniversalSocket', () => {
  let component: UniversalSocket;
  let fixture: ComponentFixture<UniversalSocket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversalSocket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversalSocket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
