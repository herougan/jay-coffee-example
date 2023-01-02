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
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeatureProductListComponent } from './components/feature-product-list/feature-product-list.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
