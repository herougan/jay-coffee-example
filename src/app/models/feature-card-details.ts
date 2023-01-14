export class FeatureCardDetail {

	constructor(
	  public id: number,
	  public name: string,
	  public img: string,
	  public desc: string,
	  public tags?: string[],
	  public shortDesc?: string,
	) {}
  
  }