import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../error/error.module';

@NgModule({
    declarations: [SelectComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ErrorModule],
    exports: [SelectComponent],
})
export class SelectModule {}
