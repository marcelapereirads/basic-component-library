import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';


type Option = {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnChanges {

  @Input() options: Array<Option> = [{
    value: '',
    viewValue: ''
  }];
  @Input() label = '';
  @Input() id = '';
  @Input() disabled = false;
  @Input() control = new FormControl({value: null});
  @Input() error = '';

  ngOnChanges(change: SimpleChanges) {
    if (change.disabled?.currentValue) {
      this.control.disable();
    } else if (change.disabled?.currentValue === false) {
      this.control.enable();
    }
  }
}
