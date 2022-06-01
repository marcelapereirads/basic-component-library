import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { BaseInputComponent } from './base-input.component';
import { BaseErrorModule } from '../base-error/base-error.module';

export const ngxMaskModule = NgxMaskModule.forRoot();

@NgModule({
    declarations: [BaseInputComponent],
    imports: [CommonModule, ngxMaskModule, FormsModule, ReactiveFormsModule, BaseErrorModule],
    exports: [BaseInputComponent],
})
export class BaseInputModule {}
