import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  img_src?: string;

  constructor() { }

  ngOnInit(): void {
	let banner_of_the_day: string = ""; // Service fetch banner
  }

}
