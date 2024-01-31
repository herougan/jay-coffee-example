import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service.service';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

@Component({
  selector: 'app-feature-product-list',
  templateUrl: './feature-product-list.component.html',
  styleUrls: ['./feature-product-list.component.scss'],
})
export class FeatureProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService /*, private cartService: CartService, private store: Store<{count: number, product: Product}> */
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products.slice(0, 3)));
  }

  ngAfterViewInit(): void {
	gsap.registerPlugin(ScrollTrigger);
    this.featureCardEntry();
  }

  featureCardEntry(): void {
	let product_cards = gsap.utils.toArray<HTMLElement>('.product-card');
	product_cards.forEach(product_card => {

		gsap.from(product_card, {
			yPercent: 10,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: product_card,
				start: "top 90%",
			},
		})

	})
  }
}
