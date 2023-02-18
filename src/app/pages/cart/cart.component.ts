import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private store: Store<{ cart: CartState }>, private cartService: CartService) {
    // this.items = cartService.getCart(0);
    this.cart$ = store.select('cart');
  }

}
