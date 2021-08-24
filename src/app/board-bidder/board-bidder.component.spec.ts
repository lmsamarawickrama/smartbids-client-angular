import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBidderComponent } from './board-bidder.component';

describe('BoardBidderComponent', () => {
  let component: BoardBidderComponent;
  let fixture: ComponentFixture<BoardBidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
