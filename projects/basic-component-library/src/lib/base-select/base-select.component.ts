import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

type Option = {
    value: string;
    viewValue: string;
};

@Component({
    selector: 'base-select',
    templateUrl: './base-select.component.html',
    styleUrls: ['./base-select.component.scss'],
})
export class BaseSelectComponent implements OnChanges {
    @Input() options: Array<Option> = [
        {
            value: '',
            viewValue: '',
        },
    ];
    @Input() label = '';
    @Input() id = '';
    @Input() disabled = false;
    @Input() control = new UntypedFormControl({ value: null });
    @Input() error = '';

    ngOnChanges(change: SimpleChanges) {
        if (change.disabled?.currentValue) {
            this.control.disable();
        } else if (change.disabled?.currentValue === false) {
            this.control.enable();
        }
    }
}
