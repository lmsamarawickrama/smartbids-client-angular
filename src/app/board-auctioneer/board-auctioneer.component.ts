import {Component} from '@angular/core';

@Component({
  selector: 'app-board-auctioneer',
  templateUrl: './board-auctioneer.component.html',
  styleUrls: ['./board-auctioneer.component.css']
})
export class BoardAuctioneerComponent {

  // @ts-ignore
  eventItemSaved: Event;

  onItemSaved(event: Event) {
    this.eventItemSaved = event;
  }
}
