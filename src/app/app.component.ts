import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { initCart } from './actions/cart.actions';
import { CartItem } from './models/cart-item';
import { CartService } from './services/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-test';

  constructor(private cartService: CartService, private store: Store) {

  }

  ngOnInit() {
    // this.cartService.getCart(0).subscribe((products) => {
    //   let items: CartItem[] = [];
    //   products.forEach(product => {
    //     items.push(new CartItem(product, 1));
    //   });
    //   this.store.dispatch(initCart({items}));
    // });
  }
}
