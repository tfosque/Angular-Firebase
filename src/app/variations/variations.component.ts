import { ProductsService } from './../services/products.service';
import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.scss']
} )
export class VariationsComponent implements OnInit {
  @Input() colors: any; // color variations object passed in from parent component
  colorsAsArray: any; // array of colors

  constructor(
    private readonly prodService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.colorsAsArray = Object.keys( this.colors ); // formatting as an array for looping in UI
  }
  updateThumb( color: any ) {
    // call product service to update thumb on user click
    this.prodService.updateActiveThumb( color );
  }
}
