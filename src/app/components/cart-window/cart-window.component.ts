import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart-service.service';

// Actions
import { addToCart, removeFromCart, clearCart } from 'src/app/actions/cart.actions';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss'],
})
export class CartWindowComponent {

  // True Cart
  // count$: Observable<Product>;
  count$: Observable<number>;
  
  // DOM elements
  window: any;

  // Main-nav-bar control
  enabled: boolean = false;

  constructor(private cartService: CartService, private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
  }

  show(): void {
    this.enabled = !this.enabled;
    if (this.enabled)
      this.window?.classList.remove('activated');
    else
      this.window?.classList.add('activated');
  }

  addToCart(): void {
    this.store.dispatch(addToCart());
  }

  removeFromCart(): void {
    this.store.dispatch(removeFromCart());
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
