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
import { StoreModule } from '@ngrx/store';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { DbMessagerComponent } from './debug/db-messager/db-messager.component';

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
    DbMessagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
