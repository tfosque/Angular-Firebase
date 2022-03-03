import { ProductsService } from './../services/products.service';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartModel } from '../models/cartModel';

/* SMART COMPONENT */

@Component( {
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
} )
export class CartComponent implements OnInit {
  cart$ = new BehaviorSubject<CartModel[]>( [] );

  constructor(
    private readonly cartService: CartService,
    private readonly productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartItems();
    this.cartService.cart$.subscribe( cartItems => {
      this.cart$.next( cartItems );
      // console.log( 'this:', this.cart$.value )
    } );
  }

  getCartItems() { }
}
