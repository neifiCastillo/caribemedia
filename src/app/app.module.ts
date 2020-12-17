import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import{ HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card'

//rutas
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { SearchService } from './components/search/search.service';
import { BussinesComponent } from './components/bussines/bussines.component';
import { BussinesService } from './components/bussines/bussines.service';






@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    HomeComponent,
    BussinesComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes , { useHash: true, relativeLinkResolution: 'legacy' } )
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
