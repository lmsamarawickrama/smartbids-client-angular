import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/smartbids/api/bid';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { }

  save(itemId: number, bidderId: number, amount: string): Observable<any> {
    return this.http.post(API_URL, {
      itemId,
      bidderId,
      amount
    }, httpOptions);
  }

  findByItem(itemId: number): Observable<any> {
    return this.http.get(API_URL + '/findByItem/' + itemId , { responseType: 'json' });
  }
}
