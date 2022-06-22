import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  HostBinding,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';

import { BaseErrorComponent } from '../base-error/base-error.component';
import { SequenceGeneratorService } from '../utils/sequence-generator.service';
import { BASE_INPUT_STYLE } from './base-input.style';
import { COLORS } from '../theme/colors.constant';

@Directive({
  selector: '[base-input]', ////
})
export class BaseInputDirective {
  @HostBinding('style') style = BASE_INPUT_STYLE;
  @HostBinding('style.background-color') backgroundColor = 'unset';
  @HostBinding('style.border-color') borderColor = COLORS.darkGrey;

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

  @Input() set errorMessage(error: string) {
    if (error) {
      this.borderColor = COLORS.error;

      this.errorComponent = this.viewContainerRef.createComponent(BaseErrorComponent, {});
      this.errorComponent.instance.message = error;
    } else {
      this.borderColor = COLORS.darkGrey;

      if (this.errorComponent) {
        this.errorComponent.destroy();
      }
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

  private _id = '';
  private _labelClass = '';
  private errorComponent: ComponentRef<BaseErrorComponent> | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,
    private sequenceGeneratorService: SequenceGeneratorService
  ) {}

  get sequenceId(): number {
    return this.sequenceGeneratorService.sequence;
  }

  get parentNode(): any {
    return this.renderer.parentNode(this.elementRef.nativeElement);
  }

  get labelElement(): any {
    return this.parentNode.querySelector(`label.${this._labelClass}`);
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

    this.renderer.setAttribute(this.labelElement, 'style', `color: ${COLORS.darkGrey}`);
  }

  bindInputLabel(): void {
    if (this._id && this._labelClass) {
      this.renderer.setAttribute(this.labelElement, 'for', this._id);
    }
  }
}
