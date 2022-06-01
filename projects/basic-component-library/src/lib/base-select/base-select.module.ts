import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSelectComponent } from './base-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseErrorModule } from '../base-error/base-error.module';

@NgModule({
    declarations: [BaseSelectComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseErrorModule],
    exports: [BaseSelectComponent],
})
export class BaseSelectModule {}
