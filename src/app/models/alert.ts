export class Alert {
  constructor(
    public message: string,
    public source: string,
    public desc: string,
    public meta?: string,
  ) {}
}