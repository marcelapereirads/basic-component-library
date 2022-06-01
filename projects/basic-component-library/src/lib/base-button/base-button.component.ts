import { Component, Input } from '@angular/core';

@Component({
    selector: 'base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
    @Input() type: 'primary' | 'secondary' = 'primary';
    @Input() id = '';
    @Input() disabled = false;
    @Input() action = () => {};

    handleClick() {
        if (!this.disabled) {
            this.action();
        }
    }
}
