import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule } from './ng-prime/ng-prime.module';
import { TableComponent } from './components/table/table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent 
  ],
  imports: [  AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgPrimeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgPrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
