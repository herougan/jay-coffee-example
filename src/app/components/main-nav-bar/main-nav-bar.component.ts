import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from 'rxjs';

import { CartWindowComponent } from '../cart-window/cart-window.component';
import { SearchWindowComponent } from '../search-window/search-window.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from 'src/app/modules/alert-module/alert.service';
import { AlertMeta, DefaultAlertMeta } from 'src/app/modules/alert-module/alert-window/alert';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent implements OnInit {
  @ViewChild(SearchWindowComponent) search!: SearchWindowComponent;
  @ViewChild(CartWindowComponent) cart!: CartWindowComponent;

  cart_button: any;
  search_button: any;
  signUpForm!: FormGroup;
  loginForm!: FormGroup;

  // css interactive
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {
    document.addEventListener('DOMContentLoaded', () => {
      // let nav = document.querySelector('.main-nav-bar');
      // let nav_logo = document.querySelector('.nav-logo-container');
      let nav_links = document.querySelector('.nav-router-links-container');
      //
      this.cart_button = document.querySelector('.cart-button');
      this.search_button = document.querySelector('.search-button');
      let hamburger_button = document.querySelector('.hamburger-button');
      let account_button = document.querySelector('.account-button');

      if (nav_links && this.cart_button)
        window.addEventListener('scroll', () => {
          let scrollTop = window.scrollY;

          // console.log(scrollTop);
          if (scrollTop > 400) {
            // nav_logo?.classList.add('hide-nav');
            nav_links?.classList.add('hide-nav');
          } else {
            // nav_logo?.classList.remove('hide-nav');
            nav_links?.classList.remove('hide-nav');
          }
          if (scrollTop > 300) {
            this.cart_button?.classList.add('show-background');
            //
            this.search_button?.classList.add('hide-button');
            account_button?.classList.add('hide-button');
            hamburger_button?.classList.add('hide-button');
          } else {
            this.cart_button?.classList.remove('show-background');
            //
            this.search_button?.classList.remove('hide-button');
            account_button?.classList.remove('hide-button');
            hamburger_button?.classList.remove('hide-button');
          }
        });
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  /* Nav bar items */
  onDropDown(): void {}

  //#region Search/Cart

  @HostListener('document:keydown.escape', ['$event'])
  handleKeyboardEscapeEvent(e: KeyboardEvent) {
    if (this.cart.enabled) this.onCart();
    if (this.search.enabled) this.onSearch();
  }

  onCart(): void {
    if (this.search.enabled) return;
    this.cart.show();

    if (this.search.enabled || this.cart.enabled) {
      this.cart_button.classList.remove('disabled');
      this.search_button.classList.remove('disabled');
    }

    if (this.cart.enabled)
      this.cart_button.classList.add('alt-show-background');
    else this.cart_button.classList.remove('alt-show-background');
  }

  onRouteChange(): void {
    if (this.cart.enabled)
      this.cart_button.classList.add('alt-show-background');
    else this.cart_button.classList.remove('alt-show-background');
  }

  onSearch(): void {
    if (this.cart.enabled) return;
    this.search.show();

    if (this.search.enabled || this.cart.enabled) {
      this.cart_button.classList.remove('disabled');
      this.search_button.classList.remove('disabled');
    }
  }

  close(): void {
    if (this.cart.enabled) this.cart.show();
    if (this.search.enabled) this.search.show();
  }

  //#endregion
  
  //#region Account
  onLoginSubmit(): void {
    // Process checkout data here
    console.warn('onLoginSubmit', this.loginForm);
    // const { email, password } = this.loginForm.value;

    this.alertService.clear();
    this.accountService.login(this.l['email'].value, this.l['password'].value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.alertService.error(error, DefaultAlertMeta());
                this.loading = false;
            }
        });

    // this.http
    //   .post('/users/authenticate', { email, password })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    // this.loginForm.reset();
  }

  // Convenience functions
  get s() { return this.signUpForm.controls; }
  get l() { return this.loginForm.controls; }

  onSignUpSubmit(): void {
    // Process checkout data here
    console.warn('onSignUpSubmit', this.signUpForm);
    if (this.s['password'] !== this.s['confirmPassword']) return;
    // const { email, password } = this.signUpForm.value;

    // this.accountService.register(this.s['value'])
    this.accountService.register(new User('0'/*dummy*/, this.s['email'].value,
                                this.s['password'].value, this.s['email'].value))
      .pipe(first())
      .subscribe({
          next: () => {
            this.alertService.success('Registration successful', new AlertMeta(true, true, true) /*, { keepAfterRouteChange: true } */);
            this.router.navigate(['../login'], { relativeTo: this.route });
          },
          error: error => {
            this.alertService.error(error, DefaultAlertMeta());
            this.loading = false;
          }
      });

    // this.http
    //   .post('/users/authenticate', { email, password })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    this.signUpForm.reset();
  }
  //#endregion
}
