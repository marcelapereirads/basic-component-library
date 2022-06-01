import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseButtonComponent } from './base-button.component';

@NgModule({
    declarations: [BaseButtonComponent],
    imports: [CommonModule],
    exports: [BaseButtonComponent],
})
export class BaseButtonModule {}
