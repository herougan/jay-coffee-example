import { Component, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-rec',
  templateUrl: './product-rec.component.html',
  styleUrls: ['./product-rec.component.scss'],
})
export class ProductRecComponent {
  @Input() product?: Product;

  @Output() productOut?: Product;
  constructor() {}
}
