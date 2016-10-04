import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { Routing } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { ProductsComponent } from './core/products/products.component';
import { CartComponent } from './core/cart/cart.component';
import { SearchComponent } from './core/search/search.component';

//servises
import { CartService } from './shared/services/cart.service';
import { SearchService } from './shared/services/search.service';
import { CrudService } from './shared/services/crud.service';

//pipes
import { IfProductLeftZeroPipe } from './shared/pipes/if-product-left-zero.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    SearchComponent,
    IfProductLeftZeroPipe,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    CartService,
    SearchService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
