import { UpperCasePipe } from '@angular/common';
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
        var type: string = "info";
        if (tag.toLowerCase() == "nuts") {
          type = "danger"
        }
        this.tagTypes.push(type); // To push what kind of product tag type for colouring
      });
    }
  }
}
