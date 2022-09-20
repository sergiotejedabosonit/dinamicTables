import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
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
    InputTextModule
  ],
  exports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ImageModule,
    ProgressSpinnerModule,
    InputTextModule
  ]
})
export class NgPrimeModule { }
