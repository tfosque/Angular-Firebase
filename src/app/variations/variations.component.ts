import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.scss']
} )
export class VariationsComponent implements OnInit {
  @Input() colors: any;
  colorsAsArray: any;
  colorKeys: any[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.colorsAsArray = Object.keys( this.colors )
    console.log( 'my colors:', this.colors, 'keys:', Object.keys( this.colors ) );
    console.log( 'find:amber', this.colors['amber'] );
    console.log( 'find:walnut', this.colors['walnut'] );
    console.log( 'find:default', this.colors['default'] );
    console.log( 'my colors:Array:', this.colorsAsArray );
  }

}
