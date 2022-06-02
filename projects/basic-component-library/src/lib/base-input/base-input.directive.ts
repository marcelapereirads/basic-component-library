import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { SequenceGeneratorService } from '../utils/sequence-generator.service';

@Directive({
  selector: '[base-input]', // TODO: seletor de component
  // templateUrl: './base-input.component.html',
  // styleUrls: ['./base-input.component.scss'],
})
export class BaseInputDirective implements OnChanges {
  @Input() set label(labelText: string) {
    if (labelText) {
      this.createLabelElement(labelText);
    }
  }

  // @Input() id = 'input';
  // @Input() disabled = false;
  // @Input() mask = '';
  // @Input() errors: Array<string> = [];
  // @Input() control = new FormControl({ value: null });

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private sequenceGeneratorService: SequenceGeneratorService
  ) {}

  get sequenceId(): number {
    return this.sequenceGeneratorService.sequence;
  }

  ngOnChanges(change: SimpleChanges) {
    // if (change.disabled?.currentValue) {
    //     this.control.disable();
    // } else if (change.disabled?.currentValue === false) {
    //     this.control.enable();
    // }
  }

  createElement(parentNode: any, element: string, className: string, children?: any[]): void {
    const labelElement = this.renderer.createElement(element);

    /**
     * Adds the class to the element created
     */
    this.renderer.setAttribute(labelElement, 'class', className);

    /**
     * Includes the element on the node
     */
    this.renderer.insertBefore(parentNode, labelElement, this.elementRef.nativeElement);

    children?.forEach((element) =>
      this.renderer.appendChild(parentNode.querySelector(`label.${className}`), element)
    );
  }

  createLabelElement(labelText: string): void {
    const className = `base-label${this.sequenceId}`;
    const innerText = this.renderer.createText(labelText);
    const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);

    this.createElement(parentNode, 'label', className, [innerText]);
  }
}
