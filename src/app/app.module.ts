import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavBarComponent } from './components/main-nav-bar/main-nav-bar.component';
import { CarousellComponent } from './components/carousell/carousell.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FeatureProductListComponent } from './components/feature-product-list/feature-product-list.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { DbMessengerComponent } from './debug/db-messenger/db-messenger.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartWindowComponent } from './components/cart-window/cart-window.component';
import { SearchWindowComponent } from './components/search-window/search-window.component';
// Actions
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './actions/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainNavBarComponent,
    CarousellComponent,
    ProductCardComponent,
    ProductListComponent,
    BannerComponent,
    InfoCardComponent,
    FooterComponent,
    FeatureProductListComponent,
    FeatureBannerComponent,
    /* Pages */
    HomeComponent,
    ShopComponent,
    ProductDetailComponent,
    FeatureCardComponent,
    FeatureListComponent,
    DbMessengerComponent,
    SearchResultComponent,
    AboutUsComponent,
    CartComponent,
    CartWindowComponent,
    SearchWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: cartReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
