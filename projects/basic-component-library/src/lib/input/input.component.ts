import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'lib-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
    @Input() type = 'text';
    @Input() label = '';
    @Input() id = 'input';
    @Input() disabled = false;
    @Input() mask = '';
    @Input() errors: Array<string> = [];
    @Input() control = new FormControl({ value: null });

    ngOnChanges(change: SimpleChanges) {
        if (change.disabled?.currentValue) {
            this.control.disable();
        } else if (change.disabled?.currentValue === false) {
            this.control.enable();
        }
    }
}
