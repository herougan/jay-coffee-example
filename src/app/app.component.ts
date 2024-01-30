import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { initCart } from './actions/cart.actions';
import { CartItem } from './models/cart-item';
import { AlertService } from './modules/alert-module/alert.service';
import { CartService } from './services/cart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jay-coffee-example';

  constructor(private cartService: CartService, private store: Store,
    private alertService: AlertService) {

  }

  ngOnInit() {
    this.cartService.initFakeCart().subscribe((items) => {
      this.store.dispatch(initCart({items}));
    });
  }
}
