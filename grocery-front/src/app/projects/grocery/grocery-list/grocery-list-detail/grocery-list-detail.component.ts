import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { GroShowService } from '../../../service/gro-show.service';
import { ShoppingCartService } from '../../../service/shopping-cart.service';

@Component({
  selector: 'app-grocery-list-detail',
  templateUrl: './grocery-list-detail.component.html',
  styleUrls: ['./grocery-list-detail.component.css']
})
export class GroceryListDetailComponent implements OnInit {

  private id: any;

  public groDet: any;

  constructor(private router: ActivatedRoute,
              private groShowService: GroShowService,
              private shoppingCartService: ShoppingCartService,
              private route: Router) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => this.id = params.get('id'));

    this.groShowService.getGro(this.id).subscribe((res) => {
      this.groDet = res.json();
      this.groDet.cart_cnt = 1;
    });
  }

  get serverUrl(): string {
    return GroShowService.server_url;
  }

  addCart() {
    this.shoppingCartService.addToCart(this.groDet);
    this.route.navigateByUrl('/cart');
  }
}
