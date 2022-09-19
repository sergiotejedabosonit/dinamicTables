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

@NgModule({
  declarations: [
    AppComponent, 
    SecondTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    NgPrimeModule
  ],
  exports: [
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
