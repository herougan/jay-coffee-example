import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss']
})
export class SearchWindowComponent {

  results: Product[] = [];

  constructor() {}


  enabled: boolean = false;

  show(): void {
    this.enabled = !this.enabled;
    let window = document.querySelector('.search-window');

  }


}
