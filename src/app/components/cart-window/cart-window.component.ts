import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { Store } from '@ngrx/store';
// import { CartService } from 'src/app/services/cart-service.service';
import { AsyncPipe } from '@angular/common';
import { CartState } from 'src/app/actions/cart.reducer';

// Actions
import { addToCart, removeFromCart, clearCart, changeCartItemCount, addProductToCart } from 'src/app/actions/cart.actions';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss'],
})
export class CartWindowComponent {

  // True Cart
  cart$: Observable<CartState>;
  
  // DOM elements
  window: any;
  price_label: HTMLInputElement;

  // Main-nav-bar control
  enabled: boolean = false;

  // Visual constants
  desc_cutoff: number = 10;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe(() => {
      this.updateCartPrice();
    })
    this.price_label = document.querySelector('.cart-price')!;
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
  }

  show(): void {
    this.enabled = !this.enabled;
  }

  addProductToCart(product: Product): void {
    let count: number = 1;
    this.store.dispatch(addProductToCart({count, product}));
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

  // Other actions
  onResult(): void {

  }

  calcCartPrice(): number {
    let total = 0;

    this.cart$.subscribe(cart => {
      cart.cartItems.forEach(item => {
        total += item.product.price * item.count;
      });
    })
    return total;
  }

  updateCartPrice(): void {
    let label = document.querySelector('.cart-price') as HTMLInputElement;
    console.log(label + "Total: $" + this.calcCartPrice());
    if (label)
      label.value = "Total: $" + this.calcCartPrice();
  }
}
