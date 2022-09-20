import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

 
import { AppComponent } from './app.component';
import { NgPrimeModule } from './ng-prime/ng-prime.module'; 
 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SecondTableComponent } from './components/second-table/second-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    SecondTableComponent, PokeInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    NgPrimeModule,
    AppRoutingModule,
    RouterModule 
  ],
  exports: [
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
