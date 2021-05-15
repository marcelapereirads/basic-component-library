import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { InputComponent } from './input.component';
import { ErrorModule } from '../error/error.module';

export const ngxMaskModule = NgxMaskModule.forRoot();

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ngxMaskModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
