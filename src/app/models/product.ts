export class Product {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public desc: string,
    public price: number,
    public notes: string,
    public tags?: string[],
    public shortDesc?: string,
    public colour?: string
  ) {}
}
