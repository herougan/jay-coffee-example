import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-feature-product-list',
  templateUrl: './feature-product-list.component.html',
  styleUrls: ['./feature-product-list.component.scss']
})
export class FeatureProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
