import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertWindowComponent } from './alert-window/alert-window.component';

@NgModule({
  declarations: [
    AlertWindowComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertWindowComponent,
  ],
})
export class AlertModule { }
