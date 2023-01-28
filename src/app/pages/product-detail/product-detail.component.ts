import { Component, OnInit, Input, ɵɵsetComponentScope } from '@angular/core';
import { Product } from '../../models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';
import { ProductService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.productService.getProduct(productIdFromRoute).subscribe((p => {
      this.product = p;
    }))
  }
}
