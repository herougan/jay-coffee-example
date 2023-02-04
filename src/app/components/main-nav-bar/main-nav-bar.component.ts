import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { CartWindowComponent } from '../cart-window/cart-window.component';
import { SearchWindowComponent } from '../search-window/search-window.component';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent implements OnInit {

  @ViewChild(SearchWindowComponent) search!: SearchWindowComponent;
  @ViewChild(CartWindowComponent) cart!: CartWindowComponent;

  cart_button: any;
  search_button: any;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      // let nav = document.querySelector('.main-nav-bar');
      let nav_logo = document.querySelector('.nav-logo-container');
      let nav_links = document.querySelector('.nav-router-links-container');
      //
      this.cart_button = document.querySelector('.cart-button');
      this.search_button = document.querySelector('.search-button');
      let hamburger_button = document.querySelector('.hamburger-button');
      
      if (nav_logo && nav_links && this.cart_button)
        window.addEventListener('scroll', () => {
          let scrollTop = window.scrollY;

          // console.log(scrollTop);
          if (scrollTop > 400) {
            nav_logo?.classList.add('hide-nav');
            nav_links?.classList.add('hide-nav');
          } else {
            nav_logo?.classList.remove('hide-nav');
            nav_links?.classList.remove('hide-nav');
          }
          if (scrollTop > 300) {
            this.cart_button?.classList.add('show-background');
            //
            this.search_button?.classList.add('hide-button');
            hamburger_button?.classList.add('hide-button');
          } else {
            this.cart_button?.classList.remove('show-background');
            //
            this.search_button?.classList.remove('hide-button');
            hamburger_button?.classList.remove('hide-button');
          }

        });
    }) 
  }

  ngOnInit(): void {  }

  /* Nav bar items */
  onDropDown(): void {

  }

  cart_active: boolean = false;
  search_active: boolean = false;

  onCart(): void {
    if (this.search_active) return;
    this.cart.show();
    this.cart_active = !this.cart_active;

    if (this.search_active || this.cart_active) {
      this.cart_button.classList.remove('disabled');
      this.search_button.classList.remove('disabled');
    }
  }

  onSearch(): void {
    if (this.cart_active) return;
    this.search.show();
    this.search_active = !this.search_active;
  }

  close(): void {
    if (this.cart_active) {
      this.cart_active = !this.cart_active;
      this.cart.show();
    }
    if (this.search_active) {
      this.search_active = !this.search_active;
      this.search.show();
    }
  }
}
