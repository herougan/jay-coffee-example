import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss'],
})
export class CartWindowComponent {
  
  // DOM elements
  window: any;

  // Main-nav-bar control
  enabled: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
  }

  show(): void {
    this.enabled = !this.enabled;
    if (this.enabled)
      this.window?.classList.remove('activated');
    else
      this.window?.classList.add('activated');
  }
}
