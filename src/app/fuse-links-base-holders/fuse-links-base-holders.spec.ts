import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseLinksBaseHolders } from './fuse-links-base-holders';

describe('FuseLinksBaseHolders', () => {
  let component: FuseLinksBaseHolders;
  let fixture: ComponentFixture<FuseLinksBaseHolders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuseLinksBaseHolders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuseLinksBaseHolders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
