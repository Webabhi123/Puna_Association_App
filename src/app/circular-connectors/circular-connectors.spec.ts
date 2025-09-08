import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularConnectors } from './circular-connectors';

describe('CircularConnectors', () => {
  let component: CircularConnectors;
  let fixture: ComponentFixture<CircularConnectors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularConnectors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularConnectors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
