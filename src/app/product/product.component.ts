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
  //pageDetails = new BehaviorSubject<CartModel>( {} );

  pageDetails: CartModel;
  constructor(
    private productService: ProductsService
  ) {
    // this.pageDetails.details = {};
  }

  ngOnInit(): void {
    this.productService.pageDetails$
      .subscribe( res => {
        this.pageDetails = res;
      } )
  }

}
