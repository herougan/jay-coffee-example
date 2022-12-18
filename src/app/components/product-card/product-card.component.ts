import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MOCK_PRODUCTS } from 'src/assets/static/data/mock-products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() product?: Product;

  constructor() { }

  ngOnInit(): void {
    this.product = MOCK_PRODUCTS[0];
  }

}
