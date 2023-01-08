import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  @Input() product?: Product;
  tagTypes: string[];

  constructor() {
    this.tagTypes = [];
   }

  ngOnInit(): void {
    if (this?.product?.tags) {
      this?.product?.tags?.forEach(tag => {
        this.tagTypes.push("info"); // To push what kind of product tag type for colouring
      });
    }
  }
}
