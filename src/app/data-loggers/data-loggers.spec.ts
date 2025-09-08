import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoggers } from './data-loggers';

describe('DataLoggers', () => {
  let component: DataLoggers;
  let fixture: ComponentFixture<DataLoggers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLoggers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataLoggers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
