import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  grocery: Array<any>

  totalPrice: number

  constructor(private shoppingCartService: ShoppingCartService) {
    this.grocery =  shoppingCartService.getAllGro()
    this.totalPrice = shoppingCartService.getTotalPrice()
  }

  ngOnInit() {
  }

  triggerCart(num, i) {
    if(num <= 0) {
      this.grocery[i].cart_cnt = 1;
    }
    this.totalPrice = this.shoppingCartService.getTotalPrice()
  }

  get serverUrl(): string {
    return ShoppingCartService.server_url;
  }

  removeGro(index) {
    this.shoppingCartService.removeGro(index);
    this.totalPrice = this.shoppingCartService.getTotalPrice()
  }
}
