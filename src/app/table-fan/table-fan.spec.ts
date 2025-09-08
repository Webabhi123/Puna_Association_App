import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFan } from './table-fan';

describe('TableFan', () => {
  let component: TableFan;
  let fixture: ComponentFixture<TableFan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
