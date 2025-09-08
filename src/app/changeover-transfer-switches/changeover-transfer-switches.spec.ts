import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeoverTransferSwitches } from './changeover-transfer-switches';

describe('ChangeoverTransferSwitches', () => {
  let component: ChangeoverTransferSwitches;
  let fixture: ComponentFixture<ChangeoverTransferSwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeoverTransferSwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeoverTransferSwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
