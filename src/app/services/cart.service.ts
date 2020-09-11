import { CartModel } from './../models/cartModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart$ = new BehaviorSubject<CartModel[]>([]);
  api = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(
    private readonly http: HttpClient
  ) { }

  getCartItems() {
    // XHR Request
    // call google function api

    // test mockaroo call
    this.http.get<CartModel[]>(this.api).subscribe(cartResults => {
      this.cart$.next(cartResults);
    });
  }

  addCartItems() {
    // XHR
  }

  updateCartItems() {
    // XHR
  }

  deleteCartItems() {
    // XHR
  }
}
