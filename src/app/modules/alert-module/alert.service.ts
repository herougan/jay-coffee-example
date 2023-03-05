import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { Alert, AlertMeta, AlertType, EmptyAlert } from 'src/app/modules/alert-module/alert-window/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() { }

  onAlert(): Observable<Alert> {
    return this.subject.asObservable(); //.pipe(filter(x => x && x.id === id))
  }
  
  success(message: string, meta: AlertMeta, source: string = "", desc: string = "") {
    this.alert(new Alert(message, source, desc, AlertType.Success, meta));
  }

  error(message: string, meta: AlertMeta, source: string = "", desc: string = "") {
    this.alert(new Alert(message, source, desc, AlertType.Error, meta));
  }

  info(message: string, meta: AlertMeta, source: string = "", desc: string = "") {
    this.alert(new Alert(message, source, desc, AlertType.Info, meta));
  }

  warn(message: string, meta: AlertMeta, source: string = "", desc: string = "") {
    this.alert(new Alert(message, source, desc, AlertType.Warning, meta));
  }

  alert(alert: Alert) {
    this.subject.next(alert);
  }

  clear() {
    this.subject.next(EmptyAlert()); // Alert Component will know to clear all alerts if this is sent
  }
}