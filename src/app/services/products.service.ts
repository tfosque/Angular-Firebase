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

  // Colors
  /*   private colorsAsArray = new BehaviorSubject<any[]>( [] );
    public colorsAsArrays$ = this.colorsAsArray.asObservable(); */

  constructor() {
    // this.setColorsAsArray( { default: 'gold', chestnut: 'brown', walnut: 'dark-brown', amber: 'gold' } )
  }

  public setProductPage( product: CartModel ): void {
    console.log( { product } );
    this.pageDetails.next( product );
  }

  /*   public setColorsAsArray( colors: object ) {
      // convert object of colors into array for ui to consume
      // const testObj = { chestnut: 'brown', walnut: 'dark-brown', amber: 'gold' };
      const testObj = colors;
      console.log( { testObj } );
      //
      this.colorsAsArray.next( [testObj] );
      console.log( 'convert:obj', this.colorsAsArray.value )
  
    } */
}
