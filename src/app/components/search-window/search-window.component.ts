import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss']
})
export class SearchWindowComponent {

  results: Product[] = [];
  search_bar: any;
  window: any;
  backdrop: any;

  // Escape to exit
  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEscapeEvent(e: KeyboardEvent) {
    if (this.enabled)
      this.show();
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    console.log(e);
    if (this.enabled)
      this.search();
  }

  constructor(product_service: ProductService) {}

  ngOnInit(): void {
    this.window = document.querySelector('.search-window');
    this.backdrop = document.querySelector('.search-background');  
    this.search_bar = document.querySelector('.search-bar');    
  }

  enabled: boolean = false;

  show(): void {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.window?.classList.add('activated');
      this.backdrop?.classList.add('activated');
    }
    else {
      this.window?.classList.remove('activated');
      this.backdrop?.classList.remove('activated');
    }
  }

  search(): void {
    this.results.push(new Product(0, "name", "img", "desc", 0, "notes"));
    console.log(this.search_bar);
  }
}
