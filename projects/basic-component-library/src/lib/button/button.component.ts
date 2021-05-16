import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text = 'Button';
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