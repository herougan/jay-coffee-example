import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss'],
})
export class CartWindowComponent {

  window: any;

  constructor() {
  }

  ngOnInit(): void {
    this.window = document.querySelector('.cart-window');
  }

  enabled: boolean = false;

  show(): void {
    this.enabled = !this.enabled;
    if (this.enabled)
      this.window?.classList.remove('activated');
    else
      this.window?.classList.add('activated');
  }
}
