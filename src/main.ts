import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { cartReducer } from './app/actions/cart.reducer';
import { CartItem } from './app/models/cart-item';
import { Product } from './app/models/product';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    // provideState(),
  ],
});