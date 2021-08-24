import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAuctioneerComponent } from './board-auctioneer.component';

describe('BoardAuctioneerComponent', () => {
  let component: BoardAuctioneerComponent;
  let fixture: ComponentFixture<BoardAuctioneerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAuctioneerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAuctioneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
