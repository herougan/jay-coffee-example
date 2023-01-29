import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { CartWindowComponent } from '../cart-window/cart-window.component';
import { SearchWindowComponent } from '../search-window/search-window.component';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent implements OnInit {

  @ViewChild('search-window') search!: SearchWindowComponent;
  @ViewChild('cart-window') cart!: CartWindowComponent;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      // let nav = document.querySelector('.main-nav-bar');
      let nav_logo = document.querySelector('.nav-logo-container');
      let nav_links = document.querySelector('.nav-router-links-container');
      //
      let cart_button = document.querySelector('.cart-button');
      let search_button = document.querySelector('.search-button');
      let hamburger_button = document.querySelector('.hamburger-button');
      
      if (nav_logo && nav_links && cart_button)
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
            cart_button?.classList.add('show-background');
            //
            search_button?.classList.add('hide-button');
            hamburger_button?.classList.add('hide-button');
          } else {
            cart_button?.classList.remove('show-background');
            //
            search_button?.classList.remove('hide-button');
            hamburger_button?.classList.remove('hide-button');
          }

        });
    }) 
  }

  ngOnInit(): void {  }

  /* Nav bar items */
  onDropDown(): void {

  }

  onCart(): void {

  }

  onSearch(): void {
    
  }
}
