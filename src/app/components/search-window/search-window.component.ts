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
  window: any;

  constructor() {
  }

  ngOnInit(): void {
    this.window = document.querySelector('.search-window');
  }

  enabled: boolean = false;

  show(): void {
    this.enabled = !this.enabled;
    if (this.enabled)
      this.window?.classList.remove('hidden-window');
    else
      this.window?.classList.add('hidden-window');
  }

  search(): void {

  }
}
