import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AppConfig} from '../modules/services/app.config';

@Injectable()
export class OrderDetailService {

  private API_URL = AppConfig.API_URL;

  buyGro: any;

  constructor(private http: Http) {
  }

  getItems(orderId) {
    this.http.get(this.API_URL + '/buygros/' + orderId).subscribe((res) => {
      this.buyGro = res.json()
      console.log(this.buyGro);
    });
  }

  showItems(): any {
    return this.buyGro;
  }
}
