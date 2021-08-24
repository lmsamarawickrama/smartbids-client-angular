import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBidsComponent } from './item-bids.component';

describe('ItemBidsComponent', () => {
  let component: ItemBidsComponent;
  let fixture: ComponentFixture<ItemBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
