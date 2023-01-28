import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';
import { ProductService } from '../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = MOCK_PRODUCTS.find(
      (product) => product.id === productIdFromRoute
    );

    // this.productService.getMainProducts()
    //   .subscribe(products => this.products = products);
    // this.products.forEach(product => console.log(product));
    // console.log("HelloWorld");
  }
}
