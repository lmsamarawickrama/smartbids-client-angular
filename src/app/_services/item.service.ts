import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/smartbids/api/item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get(API_URL , { responseType: 'json' });
  }

  saveItem(name: string, ownerId: number, minimumPrize: string, startDate: any, endDate: any): Observable<any> {
    return this.http.post(API_URL, {
      name,
      ownerId,
      duration: {
        startDate,
        endDate,
      },
      minimumPrize
    }, httpOptions);
  }

  selectBid(itemId: number, bidId: number): Observable<any> {
    return this.http.post(API_URL + '/' + itemId + '/' + 'selectBid', {
      id : bidId
    }, httpOptions);
  }
}
