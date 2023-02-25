import { Component } from '@angular/core';
import { Alert, AlertType } from 'src/app/models/alert';

@Component({
  selector: 'alert',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
})
export class AlertWindowComponent {

  alerts: Alert[] = [];
  
  // AlertType enums for comparison in HTML (cannot directly compare without these intermediary variables)
  primary_type: AlertType = AlertType.Primary;
  secondary_type: AlertType = AlertType.Secondary;
  success_type: AlertType = AlertType.Success;
  warning_type: AlertType = AlertType.Warning;
  danger_type: AlertType = AlertType.Danger;
  info_type: AlertType = AlertType.Info;
  dark_type: AlertType = AlertType.Dark;
  light_type: AlertType = AlertType.Light;


  // Utility function

  // Disappear after a while
  timeElapsed: number[] = [];

  ngOnInit(): void {
  }

}
