import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeCartItemCount, removeFromCart } from 'src/app/actions/cart.actions';
import { CartState } from 'src/app/actions/cart.reducer';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart$: Observable<CartState>;
  total_price: number = 0;
  price_label: HTMLHeadingElement;

  constructor(private store: Store<{ cart: CartState }>, private cartService: CartService) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe(() => {
      this.updateCartPrice();
    });
    this.price_label = document.querySelector('.cart-price')!;
  }
  
  ngOnInit(): void {
    this.updateCartPrice();
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
    let label = document.querySelector('.cart-page-price') as HTMLHeadingElement;
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

  increment(_item: CartItem, input: HTMLInputElement) {
    let n: number = parseInt(input.value) + 1;
    input.value = n.toString();
    let item = new CartItem(_item.product, n);
    this.store.dispatch(changeCartItemCount({item}));
    input.focus();
  }

  decrement(_item: CartItem, input: HTMLInputElement) {
    let n: number = parseInt(input.value) - 1;
    input.value = n.toString();
    let item = new CartItem(_item.product, n);
    if (n <= 0) {this.store.dispatch(removeFromCart({item})); return;}
    this.store.dispatch(changeCartItemCount({item}));
    input.focus();
  }

  removeFromCart(item: CartItem) {
    this.store.dispatch(removeFromCart({item}));
  }
}
