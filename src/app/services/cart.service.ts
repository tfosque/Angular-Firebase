import { CartModel } from './../models/cartModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new BehaviorSubject<CartModel[]>([]);

  constructor() { }
}
