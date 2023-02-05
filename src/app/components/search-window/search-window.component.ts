import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { Product, EmptyProduct } from 'src/app/models/product';

@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss']
})
export class SearchWindowComponent {

  // Search results
  results: Product[] = [];
  
  // DOM elements
  search_bar: any;
  window: any;
  backdrop: any;

  // Main-nav-bar control
  enabled: boolean = false;


  // Escape to exit
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    if (this.enabled)
      this.search();
  }

  @HostListener('click', ['$event'])
  handleClickEvent(e: MouseEvent) {
    if (this.enabled) {    
      let element = e.target as HTMLElement;
      if (element.classList.contains('search-background')) {
        this.show();
      }
    }
  }

  constructor(private product_service: ProductService, private eRef: ElementRef) {}

  ngOnInit(): void {
    this.window = document.querySelector('.search-window');
    this.backdrop = document.querySelector('.search-background');  
    this.search_bar = document.querySelector('.search-bar');    
  }

  show(): void {
    this.enabled = !this.enabled;
    // Reset search bar
    this.search_bar.value = ""; this.results = [];
  }

  onResult(): void {
    this.show();
  }

  //#region Search

  // Search constants
  lag_time: number = 200; // ms, don't run this.search() till lag_time is finished (since first character pressed).
  max_string_override_lag: number = 5; // after $v characters, run this.search()
  // Search variables
  search_string: string = "";
  time_current: number = 0;
  first_search_time: number = 0; // Resets every this.search() to last_search_time
  last_search_time: number = 0; // since last change in character

  // Search visual
  desc_cutoff: number = 30;

  isValid(): boolean {
    return false;
  }

  search(): void {
    this.results = [];
    if ((this.search_bar.value == "") || (this.search_bar.value == " ")) {return; this.results = [];}
    this.product_service.searchProducts(this.search_bar.value).subscribe((products) => {
      this.results = this.results.concat(products);
    });
  }

  //#endregion
  
  //#region cart
  addToCart(): void {

  }

  removeToCart(): void {

  }

  clearCart(): void {
    
  }
  //#endregion
}
