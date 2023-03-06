import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  page: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getMainProducts()
      .subscribe((products) => (this.products = products));
    // this.products.forEach(element => {
    //     console.log(element);
    // });
  }
}
