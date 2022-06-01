import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseErrorComponent } from './base-error.component';

@NgModule({
    declarations: [BaseErrorComponent],
    imports: [CommonModule],
    exports: [BaseErrorComponent],
})
export class BaseErrorModule {}
