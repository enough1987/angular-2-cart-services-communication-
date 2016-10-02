import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class CartService {

  static instance: CartService;

  private _subject = new Subject();
  private _cart = [];

  constructor() {
    return CartService.instance = CartService.instance || this;
  }

  get_cart(){
        return JSON.parse ( window.localStorage.getItem('cart') ) || [];
  }

  get listener() {
    return this._subject.asObservable();
  }

  send(item) {
    this._cart =  this.get_cart();
    if( this._is_item_invalid(item) ) { console.error('this item is not valid'); return false; }
    if( this._is_item_exist(item) ) { console.error('this item was added before'); return false; }
    this._cart = [...this._cart, item];
    window.localStorage.setItem( 'cart', JSON.stringify(this._cart) );
    this._subject.next(this._cart);
  }

  private _is_item_invalid(item) {
       if ( item === null || typeof item !== 'object' || typeof item.id !== 'number' ) return true;
  }

  private _is_item_exist(item){
        return !!this._cart.filter(function(el){
            if(el.id === item.id) return true;
        }).length;
  }
  

}
