import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollerModule} from 'primeng/scroller';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ImageModule,
    ProgressSpinnerModule,
    InputTextModule,
    ScrollerModule
  ],
  exports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ImageModule,
    ProgressSpinnerModule,
    InputTextModule,
    ScrollerModule
  ]
})
export class NgPrimeModule { }
