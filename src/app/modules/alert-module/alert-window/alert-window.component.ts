import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType, DefaultAlertMeta, EmptyAlert, EmptyAlertMeta } from 'src/app/models/alert';
import { AlertService } from '../alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
})
export class AlertWindowComponent {

  // Alerts
  alerts: Alert[] = [
    new Alert("One", "...", "...", AlertType.Primary, DefaultAlertMeta()),
    new Alert("Two", "...", "...", AlertType.Secondary, DefaultAlertMeta()),
    new Alert("Three", "...", "...", AlertType.Warning, DefaultAlertMeta()),
    new Alert("Four", "...", "...", AlertType.Danger, DefaultAlertMeta()),
    new Alert("Five", "...", "...", AlertType.Error, DefaultAlertMeta()),
  ];
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;
  
  // AlertType enums for comparison in HTML (cannot directly compare without these intermediary variables)
  primary_type: AlertType = AlertType.Primary;
  secondary_type: AlertType = AlertType.Secondary;
  success_type: AlertType = AlertType.Success;
  warning_type: AlertType = AlertType.Warning;
  danger_type: AlertType = AlertType.Danger;
  info_type: AlertType = AlertType.Info;
  dark_type: AlertType = AlertType.Dark;
  light_type: AlertType = AlertType.Light;

  // Visual constants
  timeout: number = 5000;

  constructor(private router: Router, private alertService: AlertService) {
  }

  ngOnInit(): void {

    // On new alert
    this.alertSubscription = this.alertService.onAlert().subscribe(alert => {
      console.log("Incoming: " + alert);
      // If signature empty alert, this is the signal to clear the array
      // if (alert === EmptyAlert()) {
      if (alert.message === "") {
        // Filter alerts with persist true
        this.alerts = this.alerts.filter(x => x.meta.persist === true);

        // Reset flag from leftover alerts
        this.alerts.forEach(x => x.meta.persist = false);
        return;
      }

      // Genuine new alert
      this.alerts.push(alert);
      if (alert.meta.autoClose) {
        setTimeout(() => {
          this.removeAlert(alert);
        })
      }
    });

    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.alertService.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    // If alert already not removed, ignore
    if (!this.alerts.includes(alert)) return;

    // Remove alert
    setTimeout(() => {
      this.alerts = this.alerts.filter(x => x !== alert);
    }, alert.meta.fade ? this.timeout : 0);
  }

  deleteAlert(alert: Alert): void {
    if (!this.alerts.includes(alert)) return;

    this.alerts = this.alerts.filter(x => x !== alert);
  }

  // Styling for alerts
  cssClass(alert: Alert) {
    if (!alert) return;

    // console.log(alert);
    // Classes
    const classes = ['alert', 'alert-dismissible'];
    const alertTypeClass = {
      [AlertType.Primary]: 'alert-primary',
      [AlertType.Secondary]: 'alert-secondary',
      [AlertType.Light]: 'alert-light',
      [AlertType.Dark]: 'alert-dark',
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning',
      [AlertType.Danger]: 'alert-danger',
    }

    if (alert.type !== undefined) {
        classes.push(alertTypeClass[alert.type]);
    }
    if (alert.meta.fade) {
        classes.push('fade');
    }

    return classes.join(' ');
  }
}

/* 
1) Alerts stack upwards
2) Alerts can* link to a location
3) Next(Alert) with no ID signals a clear
4) Purposely did this without ngrx
*/