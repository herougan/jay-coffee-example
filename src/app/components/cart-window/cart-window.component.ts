import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent {

    enabled: boolean = false;

    show(): void {
      this.enabled = !this.enabled;
      let window = document.querySelector('.search-window');
    }
}
