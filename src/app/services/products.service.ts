import { CartModel } from './../models/cartModel';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class ProductsService {
  // pageDetails
  private pageDetails = new BehaviorSubject<CartModel>( {} );
  public pageDetails$ = this.pageDetails.asObservable(); // subscribe to get the latest

  // Get active thumb object from dummy component (variations component where user clicks on new thumb)
  private activeThumbFromChild = new BehaviorSubject<string>( '' );
  public activeThumbFromChild$ = this.activeThumbFromChild.asObservable();

  constructor() { }

  public setProductPage( product: CartModel ): void {
    console.log( { product } );
    this.pageDetails.next( product );
  }

  public updateActiveThumb( newThumb: string ): void {
    if ( this.activeThumbFromChild.value === newThumb ) return; // no need to update if the same thumbnail
    this.activeThumbFromChild.next( newThumb );
  }
}
