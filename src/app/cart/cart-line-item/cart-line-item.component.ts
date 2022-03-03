import { ProductsService } from './../../services/products.service';
import { CartModel } from './../../models/cartModel';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component( {
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss']
} )
export class CartLineItemComponent implements OnInit {
  @Input() cartItem: CartModel;
  constructor(
    private readonly productService: ProductsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.cartItem);
  }

  setSelectedProduct( cartItem: any ) {
    this.productService.setProductPage( cartItem );
    this.router.navigate( ['/product/', cartItem.details.productId] );
    console.log( 'defaut:', cartItem.color.default )
  }
}
