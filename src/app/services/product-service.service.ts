import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Product, EmptyProduct } from '../models/product';
import { MOCK_PRODUCTS } from '../../assets/static/data/mock-products'
import { CartItem } from '../models/cart-item';
import { AlertService } from '../modules/alert-module/alert.service';
import { Alert, AlertType, DefaultAlertMeta } from '../modules/alert-module/alert-window/alert';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [];

  constructor(private alertService: AlertService) { 
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
      if (product.id === id)
        p = product;
    });
    return of(p);
  }

  getPrices(cartItems: CartItem[]): Observable<number[]> {
    return of([]);
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

  searchProduct(id: number): Observable<Product> {
    let searchProduct: Product;

    // Case insensitive
    this.products.forEach(product => {
      // Match name
      if (product.id == id) {
        searchProduct = product;
        return;
      }
    });

    return of(EmptyProduct());
  }

  searchProductPaged(term: string, page: number, display: number): Observable<Product[]> {

    let allProducts: Product[] = [];
    
    this.searchProducts(term).subscribe(products => {
      allProducts = products;
    });

    var min = Math.ceil(allProducts.length / display);
    if (page >= min)
      page = min;

    var start = page * display;
    var end = (page + 1) * display;

    return of(this.products.slice(start, end));
  }

  searchProducts(term: string): Observable<Product[]> {
    let searchProducts: Product[] = [];
    if ((term == " ") || (term == "")) return of(searchProducts);

    // Case insensitive
    this.products.forEach(product => {
      // Match name
      if (product.name.toUpperCase().includes(term.toUpperCase())) {
        searchProducts.push(product);
        return;
      }
    });

    return of(searchProducts);
  }

  // Takes in operation name, and a safe result option
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // Log to remote logging infrastructure
    // console.log("Error @" + operation);

    // Log to user
    this.alertService.alert(new Alert(error, operation, 'null desc', AlertType.Error, DefaultAlertMeta()))

    // Return
    return of(result as T);
  }}
}
