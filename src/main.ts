import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
// import { CartItem } from './app/models/cart-item';
// import { Product } from './app/models/product';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    // provideStore(),
  ],
});
// Argument of type '{ cart: ActionReducer<State, Action>; }' is not assignable to parameter of type 'FeatureSlice<unknown, Action>'.
//   Object literal may only specify known properties, and 'cart' does not exist in type 'FeatureSlice<unknown, Action>'