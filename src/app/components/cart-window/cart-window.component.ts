import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart-service.service';
import { AsyncPipe } from '@angular/common';

// Actions
import { addToCart, removeFromCart, clearCart, changeCartItemCount, addProductToCart } from 'src/app/actions/cart.actions';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss'],
})
export class CartWindowComponent {

  // True Cart
  cart$: Observable<CartItem[]>;
  
  // DOM elements
  window: any;

  // Main-nav-bar control
  enabled: boolean = false;

  // Visual constants
  desc_cutoff: number = 10;

  constructor(private cartService: CartService, private store: Store<{ cart: CartItem[] }>) {
    this.cart$ = store.select('cart');
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
  }

  show(): void {
    this.enabled = !this.enabled;
  }

  addProductToCart(product: Product): void {
    this.store.dispatch(addProductToCart({product}));
  }

  addToCart(item: CartItem): void {
    this.store.dispatch(addToCart({item}));
  }

  removeFromCart(item: CartItem): void {
    this.store.dispatch(removeFromCart({item}));
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
