import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { Product, EmptyProduct } from 'src/app/models/product';
// import { CartService } from 'src/app/services/cart-service.service';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addProductToCart } from 'src/app/actions/cart.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss']
})
export class SearchWindowComponent {

  // count$: Observable<number>;

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

  constructor(private product_service: ProductService, private eRef: ElementRef,
    private store: Store, private router: Router) {
    }

  ngOnInit(): void {
    this.window = document.querySelector('.search-window');
    this.backdrop = document.querySelector('.search-background');  
    this.search_bar = document.querySelector('.search-bar');    
  }

  /* ===== Events ===== */

  show(): void {
    this.enabled = !this.enabled;
    // Reset search bar
    this.search_bar.value = ""; this.results = [];
    if (this.enabled) this.search_bar.focus();
  }

  onResult(): void {
    this.show();

    // Going to another page
    if (!this.enabled) {
      // console.log("Something");
      // const currentUrl = this.router.url;
      // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      //     this.router.navigate([currentUrl]);
      // });
    }
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
  
  addProductToCart(product: Product): void {
    let count: number = 1;
    this.store.dispatch(addProductToCart({count, product}));
  }

  //#endregion
  
  //#region cart
  // addToCart(product: Product): void {
  //   this.store.dispatch(addProductToCart({product}));
  // }

  removeToCart(): void {

  }

  clearCart(): void {
    
  }
  //#endregion

  /* Scroll */
  scrollBar: any;
  timeoutScroll(): void {

  }
}
