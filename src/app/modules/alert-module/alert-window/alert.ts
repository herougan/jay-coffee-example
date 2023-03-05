export class Alert {
  constructor(
    public message: string,
    public source: string,
    public desc: string,
    public type: AlertType,
    public meta: AlertMeta,
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
  Error,
}

export class AlertMeta  {
  constructor(
    public autoClose: boolean,
    public persist: boolean,
    public fade?: boolean,
    public link?: string,
  ) {}
}

export function EmptyAlertMeta(): AlertMeta {
  return new AlertMeta(false, false, false);
}

export function DefaultAlertMeta(): AlertMeta {
  return new AlertMeta(true, true, false);
}

export function EmptyAlert(): Alert {
  return new Alert("", "", "", AlertType.Primary, EmptyAlertMeta());
}