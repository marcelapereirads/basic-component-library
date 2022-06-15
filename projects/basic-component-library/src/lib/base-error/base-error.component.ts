import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'base-error',
  templateUrl: './base-error.component.html',
  styleUrls: ['./base-error.component.scss'],
})
export class BaseErrorComponent {
  @Input() message = '';
}
