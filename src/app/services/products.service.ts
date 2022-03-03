import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class ProductsService {
  private pageDetails = new BehaviorSubject<object>( {} );
  public pageDetails$ = this.pageDetails.asObservable(); // subscribe to get the latest

  constructor() { }

  setProductPage( product: {} ): void {
    this.pageDetails.next( product );
  }
}
