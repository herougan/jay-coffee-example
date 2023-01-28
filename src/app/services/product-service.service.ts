import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { MOCK_PRODUCTS } from '../../assets/static/data/mock-products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [];

  constructor() { 
    this.products = MOCK_PRODUCTS;
  }

  getProducts(params: number): Observable<Product[]> {
    return of(this.products);
  }

  getMainProducts(): Observable<Product[]> {
    return this.getProducts(-1);
  }

  getProduct(id: number): Observable<Product> {
    let p: Product = this.products[0];
    this.products.forEach(product => {
      console.log(product.id + ":" + id);
      if (product.id === id)
        p = product;
    });
    return of(p); // TODO return failure here
  }

  searchProducts(): Observable<Product[]> {
    return this.getProducts(-1);
  }
}
