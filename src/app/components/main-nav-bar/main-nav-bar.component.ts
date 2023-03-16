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
import { matchValidator } from 'src/app/util/validators';
import { wait } from 'src/app/util/async_util';

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
  signUpSubmitted = false;
  loginSubmitted = false;
  signUpLoading = false;
  loginLoading = false;
  passwordMismatch = false;

  // user current value
  user: any;

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required,
      ]],
    });
    this.signUpForm.controls['confirmPassword'].addValidators(
      matchValidator(this.s['password'], this.s['confirmPassword'])
    );

    this.user = this.accountService.userValue;
    
    // Comment: Since this form is rigged up without bootstrap's ng-validation options anyway,
    // Why not add validators the whole form instead, and rig the text that way?
    this.signUpForm.addValidators(matchValidator(this.s['password'], this.s['confirmPassword']));
    this.signUpForm.updateValueAndValidity();
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

    this.loginSubmitted = true;

    // Process checkout data here

    this.alertService.clear();
    this.loginLoading = true;

    if (this.loginForm.invalid) {
      this.shakeModal();
      this.loginLoading = false;
      return;
    }

    // Uncolour modal
    this.loginSubmitted = false;
    this.accountService.login(this.l['email'].value, this.l['password'].value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(returnUrl);
                this.user = this.accountService.userValue;
                this.alertService.success('Welcome back, ' + this.user.email, new AlertMeta(true, true, true));

                // Hide modal
                this.loginLoading = false;
                this.hideModal();
            },
            error: error => {
                this.alertService.error(error, DefaultAlertMeta());
                this.modalError(error);
                this.shakeModal();
                this.loginLoading = false;
                this.loginSubmitted = true;
            }
        });

    this.loginForm.reset();
  }

  accountModalOpen() {
    let modal = document.querySelector('#accountModal');
    modal?.classList.remove('hidden');
  }

  // Convenience functions
  get s() { return this.signUpForm.controls; }
  get l() { return this.loginForm.controls; }

  onsignUpSubmit(): void {

    // Start loading graphic, allow error messages to appear
    this.signUpSubmitted = true;
    this.signUpLoading = true;

    if (this.signUpForm.invalid) {
      // this.alertService.error("One of the fields is invalid!", DefaultAlertMeta(), "signUp", "Sign up request failed.")
      this.shakeModal();
      this.signUpLoading = false;
      return;
    }
    delete this.signUpForm.value['confirmPassword'];

    this.alertService.clear();
    // Start loading graphic

    // Uncolour modal
    this.signUpSubmitted = false;
    this.accountService.register(this.signUpForm.value)
      .pipe(first())
      .subscribe({
          next: () => {
            // Send request
            this.alertService.success('Registration successful', new AlertMeta(true, true, true) /*, { keepAfterRouteChange: true } */);
            this.router.navigate(['/home']);
            this.user = this.accountService.userValue;

            // Stop loading graphic            
            this.signUpLoading = false;
            this.hideModal();
          },
          error: error => {
            this.alertService.error(error, DefaultAlertMeta());
            this.modalError(error);
            this.shakeModal();
            this.signUpLoading = false;
            this.signUpSubmitted = true;
          }
      });

  
    this.signUpForm.reset();
  }

  signOut(): void {
    this.accountService.logout();
    this.router.navigate(['/home']);
    this.hideModal();
    document.location.reload();
  }

  hideModal(): void {
    // Hide modal
    let modal = document.querySelector('#account-modal');
    let modal_backdrop = document.querySelector('.modal-backdrop');
    modal?.classList.remove('show');
    modal_backdrop?.classList.remove('show');
  }

  modalTime: number = 500;
  modalError(message: string): void {
    let modal = document.querySelector('.modal-error');
    
    modal?.classList.add('error-visible');
    let timeout_f = setTimeout(() => {
      modal?.classList.remove('error-visible');
    }, this.modalTime);
  } 
  
  shakeTime: number = 100;
  minStrength: number = 15;
  maxStrength: number = 30;
  shaking: boolean = false;
  async shakeModal(): Promise<void> {
    if (this.shaking) return;
    let modal = document.querySelector('#account-modal-window') as HTMLElement;
    let strength = this.minStrength;
    this.shaking = true;

    for (let i = 0; i < 15; i++) {
      let x = strength * (i % 2 ? -1 : 1);
      // let y = Math.random() * strength - strength / 2;
      if (i < 4)
        strength = (strength + this.maxStrength) / 2;
      else 
        strength /= 1.5;
      modal.style.transform = "translate(" + x.toString() + "px, " + 0 + "px)";
      await wait(60);

      if (!this.shaking) break;
    }
    modal.style.transform = "translate(0px, 0px)";

    this.shaking = false;
  }
  //#endregion
}