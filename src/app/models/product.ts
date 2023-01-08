export class Product {

	constructor(
	  public id: number,
	  public name: string,
	  public img: string,
	  public desc: string,
	  public tags?: string[],
	  public shortDesc?: string,
	) {}
  
  }