import { Component, OnInit} from '@angular/core';
import { GroShowService } from '../../service/gro-show.service';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { Http } from '@angular/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  sortOptions: any;

  sortOrder: number;

  sortField: string;

  public groceryList: Array<{ gro_desc: string, gro_name: string, price: string, id: number, pic: string }>;

  pic: any

  constructor(private httpclient: HttpClient,
              private http: Http,
              private groService: GroShowService,
              private shoppingCartService: ShoppingCartService,
              private route: Router) {
    this.getGrocery();
  }

  get serverUrl(): string {
    return GroShowService.server_url;
  }

  ngOnInit() {
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Name', value: 'name'}
    ];
  }

  getGrocery(): any {
    this.groService.getGrocery().subscribe((res) => {
      this.groceryList = <Array<{ id: number, gro_desc: string, gro_name: string, price: string, pic: string }>>res.json();
    })
  }

  getPics(): any {
    this.groService.getPics().subscribe((res) => {
      this.pic = res;
    });
  }

  addToCart(grocery) {
    grocery.cart_cnt = 1;
    this.shoppingCartService.addToCart(grocery);
    this.route.navigateByUrl('/cart');
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
