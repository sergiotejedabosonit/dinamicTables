import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ImageModule
  ],
  exports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ImageModule
  ]
})
export class NgPrimeModule { }
