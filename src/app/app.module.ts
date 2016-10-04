import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/products/products.component';
import { CartComponent } from './shared/cart/cart.component';
import { SearchComponent } from './shared/search/search.component';


import { CartService } from './services/cart.service';
import { SearchService } from './services/search.service';
import { CrudService } from './services/crud.service';


import { IfProductLeftZeroPipe } from './pipes/if-product-left-zero.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent,
    IfProductLeftZeroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CartService,
    SearchService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
