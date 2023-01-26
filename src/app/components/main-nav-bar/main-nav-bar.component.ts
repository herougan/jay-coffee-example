import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent implements OnInit {

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      let nav = document.querySelector('.main-nav-bar');
      
      if (nav)
        window.addEventListener('scroll', () => {
          let scrollTop = window.scrollY;
          // console.log(scrollTop);
          if (scrollTop > 500) {
            nav?.classList.add('hide-nav');
          } else {
            nav?.classList.remove('hide-nav');
          }
        });
    }) }

  ngOnInit(): void {
  }

}
