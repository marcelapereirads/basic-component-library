import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseInputDirective } from './base-input.directive';
import { BaseErrorModule } from '../base-error/base-error.module';

@NgModule({
  declarations: [BaseInputDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseErrorModule],
  exports: [BaseInputDirective],
})
export class BaseInputModule {}
