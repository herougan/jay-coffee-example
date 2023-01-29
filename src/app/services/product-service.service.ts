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

  getProducts(params: number): Observable<Product[]> { // Dummy number
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

  getProductsPaged(params: number, page: number, display: number): Observable<Product[]> {

    let allProducts: Product[] = [];
    
    this.getProducts(0).subscribe(products => {
      allProducts = products;
    });

    var min = Math.ceil(allProducts.length / display);
    if (page >= min)
      page = min;

    var start = page * display;
    var end = (page + 1) * display;

    return of(this.products.slice(start, end));    
  }

  searchProduct(term: string, id: number): Observable<Product[]> {
    let searchProducts: Product[] = [];

    // Case insensitive
    this.products.forEach(product => {
      // Match name
      if (product.name.toUpperCase().includes(term.toUpperCase())) {
        searchProducts.push(product);
        return;
      }
      // Match short desc
      if (product.shortDesc && product.shortDesc.toUpperCase().includes(term.toUpperCase())) {
        searchProducts.push(product);
        return;
      }
    });

    return of(searchProducts);
  }

  searchProductPaged(term: string, id: number, page: number, display: number): Observable<Product[]> {

    let allProducts: Product[] = [];
    
    this.searchProduct(term, id).subscribe(products => {
      allProducts = products;
    });

    var min = Math.ceil(allProducts.length / display);
    if (page >= min)
      page = min;

    var start = page * display;
    var end = (page + 1) * display;

    return of(this.products.slice(start, end));
  }

  searchProducts(): Observable<Product[]> {
    return this.getProducts(-1);
  }
}
