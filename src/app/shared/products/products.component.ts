import { Component, OnInit } from '@angular/core';


import { CartService } from '../../services/cart.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [
    CartService,
    SearchService
  ],
  inputs: ['products']
})
export class ProductsComponent implements OnInit {

  public products: Array<any>;
  public searched_products: Array<any>;

  constructor( private cartService: CartService, private searchService: SearchService ) {}

  ngOnInit() {
      this.searchService.listener.subscribe( search => {
        this.searched_products = this.filter_products(search);
      });    
  }

  send(item){
      this.cartService.send( item );
  }

  
  filter_products(search){
       return this.products.filter(function(el){
            if( el.title && el.title.search(search) !== -1 ) {
              return true;
            }
       });
  };

  show_product_view(val){
      return !!(val && !val.length);
  };

  clear_search(){
      delete this.searched_products;
  };

}
