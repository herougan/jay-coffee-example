export class Product {

	constructor(
	  public id: number,
	  public name: string,
	  public img: string,
	  public desc: string,
	  public price: number,
	  public tags?: string[],
	  public shortDesc?: string,
	) {}
  
  }