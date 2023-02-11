import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart-service.service';
import { AsyncPipe } from '@angular/common';

// Actions
import { addToCart, removeFromCart, clearCart, changeCartItemCount, addProductToCart } from 'src/app/actions/cart.actions';
import { CartState } from 'src/app/actions/cart.reducer';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss'],
})
export class CartWindowComponent {

  // True Cart
  cart$: Observable<CartState>;
  // cart$: CartItem[] = [];
  
  // DOM elements
  window: any;

  // Main-nav-bar control
  enabled: boolean = false;

  // Visual constants
  desc_cutoff: number = 10;

  constructor(private cartService: CartService , private store: Store<{ cart: CartState }> ) {
    this.cart$ = store.select('cart');
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
  }

  show(): void {
    this.enabled = !this.enabled;
  }

  addProductToCart(product: Product): void {
    let count: number = 1;
    this.store.dispatch(addProductToCart({product, count}));
  }

  addToCart(item: CartItem): void {
    this.store.dispatch(addToCart({item}));
  }

  removeFromCart(item: CartItem): void {
    let product: Product = item.product;
    this.store.dispatch(removeFromCart({product}));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }

  editCartCount(count: number, item: CartItem): void {
    item.count = count;
    this.store.dispatch(changeCartItemCount({item}));
  }

  onResult(): void {

  }
}
