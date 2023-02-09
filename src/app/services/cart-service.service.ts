import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(user_id: number): Observable<Product[]> {
    // User_id not relevant. Just for completion's sake
    return of([]);
  }

  addToCart(): void {

  }

  removeFromCart(): void {

  }

  clearCart(): void {

  }
}
