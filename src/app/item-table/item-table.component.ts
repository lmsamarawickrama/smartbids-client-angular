import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ItemService} from "../_services/item.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ItemBidsComponent} from "../item-bids/item-bids.component";

interface RecordsModel {
  id: string;
  name: string;
  owner: string;
  minimumPrice?: string;
  startDate?: string;
  endDate?: string;
}

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})

export class ItemTableComponent implements OnInit, OnDestroy {

  private subs = new Subscription();

  displayedColumns = ['id', 'name', 'owner', 'minimumPrice', 'startDate', 'endDate', 'isBidSelected'];

  // @ts-ignore
  dataSource: MatTableDataSource<RecordsModel>;

  // @ts-ignore
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataArray: any;

  selectedRowIndex: any;

  @Input()
  set eventItemSaved(eventItemSaved: Event) {
    if (eventItemSaved) {
      this.setItems()
    }
  }

  constructor(private itemService: ItemService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.setItems()
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  private setItems(): void {
    this.subs.add(this.itemService.getAllItems()
      .subscribe((res) => {
          this.dataArray = res;
          this.dataSource = new MatTableDataSource<RecordsModel>(this.dataArray);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  getBids(item: any) {

    if (this.selectedRowIndex === item.id) {
      this.selectedRowIndex = -1;
    } else {
      this.selectedRowIndex = item.id;
    }

    if (this.selectedRowIndex === item.id) {
      let bidsNgbModalRef = this.modalService.open(ItemBidsComponent, {ariaLabelledBy: 'modal-basic-title'});
      bidsNgbModalRef.componentInstance.item = item;
      bidsNgbModalRef.result.then((bidSelected) => {
        if (bidSelected) {
          this.setItems();
        }
      });
    }
  }
}
