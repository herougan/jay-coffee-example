import { Component, OnInit, Input, ɵɵsetComponentScope } from '@angular/core';
import { Product } from '../../models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';
import { ProductService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

import { addProductToCart } from 'src/app/actions/cart.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store) {
    }

  /* Emit (add)="onAdd($event)" (parent) (child) @Output() add = new EventEmitter<string>() */

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.productService.getProduct(productIdFromRoute).subscribe((p => {
      this.product = p;
    }))
  }
  
  addProductToCart(count: number, product: Product): void {
    if (count < 1) {
      this.launchAlert("Only positive numbers allowed!");
      return;
    }
    this.store.dispatch(addProductToCart({count, product}));
  }

  launchAlert(message: string): void {

  }

  validationCheck($event: Event): void {
    let t = $event.currentTarget as HTMLInputElement;
    let s = parseInt(t.value, 10);

    if (!Number.isInteger(s)) t.value = "";
  }
}
