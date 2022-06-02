import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { BaseInputDirective } from './base-input.directive';
import { BaseErrorModule } from '../base-error/base-error.module';

export const ngxMaskModule = NgxMaskModule.forRoot();

@NgModule({
  declarations: [BaseInputDirective],
  imports: [CommonModule, ngxMaskModule, FormsModule, ReactiveFormsModule, BaseErrorModule],
  exports: [BaseInputDirective],
})
export class BaseInputModule {}
