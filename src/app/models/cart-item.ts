import { Product } from "./product";

export class CartItem {
	constructor(
	  	public product: Product,
		public count: number,
		public price?: number, // Recalculated on count change
	) {}
  }