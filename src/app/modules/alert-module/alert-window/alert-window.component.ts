import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from 'src/app/models/alert';
import { AlertService } from '../alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
})
export class AlertWindowComponent {

  alerts: Alert[] = [];
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
  timeout: number = 500;

  constructor(private router: Router, private alertService: AlertService) {

  }

  ngOnInit(): void {
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

    // Add fade class
    

    // Remove alert
    setTimeout(() => {
      this.alerts.filter(x => x !== alert);
    }, this.timeout);
  }

  // Styling for alerts
  cssClass(alert: Alert) {
    if (!alert) return;

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