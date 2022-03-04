import { CartModel } from './../models/cartModel';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
} )
export class ProductComponent implements OnInit {

  pageDetails: CartModel;
  // Active Thumb
  activeThumb = new BehaviorSubject<any>( '' );
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    // suscribe to changes on the newest thumb
    this.productService.activeThumbFromChild$.subscribe( thumb => {
      console.log( { thumb } );
      this.activeThumb.next( thumb );
    } )
    // subscribe to pageDetails for latest changes
    this.productService.pageDetails$
      .subscribe( res => {
        this.pageDetails = res;
      } )

    // Initialize first thumbnail
    this.activeThumb.next( this.pageDetails.color.default );
    console.log( 'this: color:', this.activeThumb.value );
  }

}
