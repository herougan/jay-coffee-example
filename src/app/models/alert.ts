export class Alert {
  constructor(
    public message: string,
    public source: string,
    public desc: string,
    public type: AlertType,
    public meta?: string,
  ) {}
}

export enum AlertType {
  Primary,
  Secondary,
  Success,
  Warning,
  Danger,
  Info,
  Dark,
  Light,
}

export class AlertOption {
  
}