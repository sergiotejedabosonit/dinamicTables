import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    TableModule
  ],
  exports: [
    DropdownModule,
    MultiSelectModule,
    TableModule
  ]
})
export class NgPrimeModule { }
