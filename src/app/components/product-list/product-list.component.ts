import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {  

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = MOCK_PRODUCTS;
  }

}
