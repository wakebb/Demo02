import { Injectable } from '@angular/core';
import {AppConfig} from '../modules/services/app.config';

@Injectable()
export class ShoppingCartService {
  public static server_url = AppConfig.API_URL + '/files/';

  public cart: Array<any>

  public total_price: number;

  constructor() {
    this.cart = new Array<any>();
    this.total_price = 0;
  }

  addToCart(grocery: any) {
    let flag = true;
    this.cart.forEach((obj) => {
      if (obj.gro_name === grocery.gro_name) {
        flag = false
        obj.cart_cnt += 1;
        this.total_price += grocery.price;
      }
    })
    if (flag) {
      this.cart.push(grocery)
      this.total_price += grocery.price;
    }
  }

  getAllGro() {
    return this.cart;
  }

  getTotalPrice() {
    let price: number = 0
    this.cart.forEach((obj) => {
      price += obj.cart_cnt * obj.price
    })
    this.total_price = price;
    return this.total_price;
  }

  removeGro(index) {
    this.total_price -= this.cart[index].price * this.cart[index].cart_cnt;
    this.cart.splice(index, 1)
  }

  clearCart() {
    this.total_price = 0;
    this.cart = new Array<any>()
  }

}
