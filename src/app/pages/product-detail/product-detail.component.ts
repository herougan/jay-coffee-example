import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';
import { ProductService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { State, Store } from '@ngrx/store';

import { addProductToCart } from 'src/app/actions/cart.actions';
import { CartState, cartReducer } from 'src/app/actions/cart.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;
  cart$: Observable<CartState>;

  constructor(private route: ActivatedRoute,
    private productService: ProductService, private store: Store<{cart: CartState}>) {
      this.cart$ = store.select('cart');
    }


    // constructor(private product_service: ProductService, private eRef: ElementRef,
    //   private cartService: CartService, private store: Store<{ count : number}>) {
    //     this.count$ = store.select('count');
    //   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.productService.getProduct(productIdFromRoute).subscribe((p => {
      this.product = p;
    }))
  }


  addProductToCart(count: number, product: Product): void {
    this.store.dispatch(addProductToCart({product, count}));
  }
}
