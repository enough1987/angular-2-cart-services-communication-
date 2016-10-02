import { Component, OnInit } from '@angular/core';


import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [
    CartService
  ]
})
export class CartComponent implements OnInit {

  public cart_view = false;
  public cart = this.cartService.get_cart();

  constructor( private cartService: CartService ) {}

  ngOnInit() {
      this.cartService.listener.subscribe( cart => {
        this.cart = cart;
      });    
  }

  change_cart_view(){
       this.cart_view = !this.cart_view;
  };

  get_total(){
      var total = 0;
      this.cart.forEach(function(el){
         if ( !el.price ) return false;
         total += el.price;        
      });
      return total;
  };

}
