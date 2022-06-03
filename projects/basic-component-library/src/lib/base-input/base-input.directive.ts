import { Directive, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

import { COLORS } from '../utils/colors.constant';
import { SequenceGeneratorService } from '../utils/sequence-generator.service';

@Directive({
  selector: '[base-input]', // TODO: seletor de component
})
export class BaseInputDirective {
  @Input() set id(id: string) {
    if (id) {
      this._id = id;
      this.renderer.setAttribute(this.elementRef.nativeElement, 'id', id);
      this.bindInputLabel();
    }
  }

  @Input() set label(labelText: string) {
    if (labelText) {
      this.createLabelElement(labelText);
      this.bindInputLabel();
    }
  }

  @Input() set disable(isDisabled: boolean) {
    if (isDisabled) {
      this.backgroundColor = COLORS.disabled;
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
    } else {
      this.backgroundColor = 'unset';
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }

  @HostBinding('style.background-color') backgroundColor = 'unset';

  private _id = '';
  private _labelClass = '';

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

  get parentNode(): any {
    return this.renderer.parentNode(this.elementRef.nativeElement);
  }

  createElement(element: string, className: string, children?: any[]): void {
    const labelElement = this.renderer.createElement(element);

    /**
     * Adds the class to the element created
     */
    this.renderer.setAttribute(labelElement, 'class', className);

    /**
     * Includes the element on the node
     */
    this.renderer.insertBefore(this.parentNode, labelElement, this.elementRef.nativeElement);

    children?.forEach((element) =>
      this.renderer.appendChild(this.parentNode.querySelector(`label.${className}`), element)
    );
  }

  createLabelElement(labelText: string): void {
    const className = `base-label${this.sequenceId}`;
    const innerText = this.renderer.createText(labelText);

    this._labelClass = className;
    this.createElement('label', className, [innerText]);
  }

  bindInputLabel(): void {
    if (this._id && this._labelClass) {
      this.renderer.setAttribute(
        this.parentNode.querySelector(`label.${this._labelClass}`),
        'for',
        this._id
      );
    }
  }
}
