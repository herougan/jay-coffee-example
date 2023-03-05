import { Component, OnInit, Input, ɵɵsetComponentScope } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';
import { ProductService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

import { addProductToCart } from 'src/app/actions/cart.actions';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/modules/alert-module/alert.service';
import {
  Alert,
  AlertType,
  DefaultAlertMeta,
} from 'src/app/modules/alert-module/alert-window/alert';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  productRecs: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store,
    private alertService: AlertService,
    private router: Router
  ) {
    this.productRecs = MOCK_PRODUCTS.slice(0, 4);
  }

  /* Emit (add)="onAdd($event)" (parent) (child) @Output() add = new EventEmitter<string>() */

  ngOnInit(): void {
    console.log('init productDetail');
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.productService.getProduct(productIdFromRoute).subscribe((p) => {
      this.product = p;
    });
  }

  addCartMessage(count: number, product: Product): string {
    return count.toString() + ' added';
  }

  addProductToCart(count: number, product: Product): void {
    if (count < 1 || isNaN(count)) {
      this.launchAlert('Only positive numbers allowed!');
      return;
    }
    this.store.dispatch(addProductToCart({ count, product }));
    this.alertService.alert(
      new Alert(
        count + 'x ' + product.name + ' added',
        'ProductDetail',
        product.desc,
        AlertType.Primary,
        DefaultAlertMeta()
      )
    );
  }

  launchAlert(message: string): void {}

  validationCheck($event: Event): void {
    let t = $event.currentTarget as HTMLInputElement;
    let s = parseInt(t.value, 10);

    if (!Number.isInteger(s)) t.value = '';
  }
}
