import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ItemService} from "../_services/item.service";
import {NgForm} from "@angular/forms";
import {TokenStorageService} from "../_services/token-storage.service";
import {BidService} from "../_services/bid.service";

interface RecordsModel {
  id: string;
  bidder: string;
  amount: string;
}

@Component({
  selector: 'app-item-bids',
  templateUrl: './item-bids.component.html',
  styleUrls: ['./item-bids.component.css']
})
export class ItemBidsComponent implements OnInit {

// @ts-ignore
  @Input() item;

  displayedColumns = ['id', 'bidder', 'amount', 'selectBid'];

  // @ts-ignore
  dataSource: MatTableDataSource<RecordsModel>;

  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray: any;


  constructor(public activeModal: NgbActiveModal, private itemService: ItemService, private tokenStorageService: TokenStorageService, private bidService: BidService) {
  }

  ngOnInit() {
    this.initDataSourceWithBids(this.item.bids);
  }

  private initDataSourceWithBids(bids) {
    this.dataArray = bids;
    this.dataSource = new MatTableDataSource<RecordsModel>(this.dataArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  selectBid(itemId: any, bidId: any) {
    this.itemService.selectBid(itemId, bidId).subscribe(
      () => {
        this.activeModal.close(true);
      },
    );
  }

  getBidAction(element: any, selectedBid: any) {
    if (!selectedBid) {
      return 'Select Bid'
    } else if (selectedBid.id === element.id) {
      return 'Selected Bid'
    } else {
      return 'Not Selected'
    }

  }

  registerBid(regForm: NgForm, itemId: number) {
    let userId = this.tokenStorageService.getUser().id;

    this.bidService.save(itemId, userId, regForm.value.Amount).subscribe(
      () => {
        regForm.reset();
        this.bidService.findByItem(itemId).subscribe(
          data => {
            this.initDataSourceWithBids(data);
          }
        );
      },
    );
  }
}
