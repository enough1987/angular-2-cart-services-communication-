import { Component } from '@angular/core';


import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ProductsService
  ]
})
export class AppComponent {

  public products = [];

  constructor( private productsService : ProductsService ){
    this.productsService.get('./app/services/test.json')
                     .subscribe(
                       products => this.products = products,
                       error =>  console.log( error ) 
                     );
  }

}
