import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CartLineItemComponent } from './cart/cart-line-item/cart-line-item.component';
import { SuggestedSellingComponent } from './suggested-selling/suggested-selling.component';
import { ProductVariationComponent } from './product-variation/product-variation.component';
import { VariationsComponent } from './variations/variations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductComponent,
    BreadcrumbsComponent,
    CartLineItemComponent,
    SuggestedSellingComponent,
    ProductVariationComponent,
    VariationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
