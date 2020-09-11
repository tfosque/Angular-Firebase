import { CartModel } from './../../models/cartModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss']
})
export class CartLineItemComponent implements OnInit {
  @Input() cartItem: CartModel;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.cartItem);
  }

}
