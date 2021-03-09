import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { PubComponent } from './pub/pub.component';
import { AboutComponent } from './about/about.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { TopMarquesComponent } from './top-marques/top-marques.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PubComponent,
    AboutComponent,
    ListProduitsComponent,
    TopMarquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
