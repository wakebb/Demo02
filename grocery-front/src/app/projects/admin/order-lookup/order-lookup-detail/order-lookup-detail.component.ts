import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {OrderDetailService} from "../../../service/order-detail.service";

@Component({
  selector: 'app-order-lookup-detail',
  templateUrl: './order-lookup-detail.component.html',
  styleUrls: ['./order-lookup-detail.component.css']
})
export class OrderLookupDetailComponent implements OnInit {

  buyGro: any;

  constructor(private orderDetailService: OrderDetailService) {
  }

  ngOnInit() {
    this.showItems();
  }

  showItems() {
    this.buyGro = this.orderDetailService.showItems();
    console.log(this.buyGro);
    this.buyGro.forEach(obj => {
      obj.gro_id
    })
  }
}
