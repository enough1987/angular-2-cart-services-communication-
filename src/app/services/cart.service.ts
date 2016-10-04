import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class CartService {

  static instance: CartService;

  private subject = new Subject();
  private cart = [];

  constructor() {
    return CartService.instance = CartService.instance || this;
  }

  get_cart(){
        return JSON.parse ( window.localStorage.getItem('cart') ) || [];
  }

  get listener() {
    return this.subject.asObservable();
  }

  send(item) {
    this.cart =  this.get_cart();
    if( this._is_item_invalid(item) ) { console.error('this item is not valid'); return false; }
    if( this._is_item_exist(item) ) { console.error('this item was added before'); return false; }
    this.cart = [...this.cart, item];
    window.localStorage.setItem( 'cart', JSON.stringify(this.cart) );
    this.subject.next(this.cart);
  }

  private _is_item_invalid(item) {
       if ( item === null || typeof item !== 'object' || typeof item.id !== 'number' ) return true;
  }

  private _is_item_exist(item){
        return !!this.cart.filter(function(el){
            if(el.id === item.id) return true;
        }).length;
  }
  

}
