import { Component } from '@angular/core';
import { Alert } from 'src/app/models/alert';

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.scss']
})
export class AlertWindowComponent {

  alerts: Alert[] = [];


  // Utility function

  // Disappear after a while
  timeElapsed: number[] = [];
}
