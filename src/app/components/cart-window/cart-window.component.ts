import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { Store } from '@ngrx/store';
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
  total_price: number = 0;
  
  // DOM elements
  window: any;
  scroll_wrapper: any;
  price_label: HTMLHeadingElement;

  // Main-nav-bar control
  enabled: boolean = false;

  // Visual constants
  desc_cutoff: number = 10;
  // Scroll constants
  scroll_time: number = 500;
  timeout_f: any;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe(() => {
      this.updateCartPrice();
    });
    this.price_label = document.querySelector('.cart-price')!;
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
    this.scroll_wrapper = document.querySelector('.search-scroll') as HTMLElement;

    this.scroll_wrapper.addEventListener('scroll', () => {
      this.scroll_wrapper.classList.add('on-search');
      clearTimeout(this.timeout_f);
      this.timeout_f = setTimeout(() => {
        this.scroll_wrapper.classList.remove('on-search');
      }, this.scroll_time);
    });
  }

  ngOnDestroy(): void {
    // this.cart$.unsubscribe();
  }

  show(): void {
    this.enabled = !this.enabled;
  }

  //#region Cart
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

  this.total_price = total
    return total;
  }

  updateCartPrice(): void {
    let label = document.querySelector('.cart-price') as HTMLHeadingElement;
    if (label)
      label.textContent = "Total: $" + this.calcCartPrice();
  }

  validationCheck($event: Event, _item: CartItem): void {
    let t = $event.currentTarget as HTMLInputElement;
    let s = parseInt(t.value, 10);

    if (!Number.isInteger(s)) t.value = "";

    if (Number.isInteger(s)) {
      let item: CartItem = new CartItem(_item.product, s);
      this.store.dispatch(changeCartItemCount({item}));
      t.focus();
    }
  }
  //#endregion
}
