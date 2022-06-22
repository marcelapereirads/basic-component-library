import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { BaseInputDirective } from './base-input.directive';
import { BaseErrorModule } from '../base-error/base-error.module';

@Component({
  template: `
    <form>
      <input
        base-input
        [disable]="disable"
        [errorMessage]="errorMessage"
        [label]="label"
        [id]="id" />
    </form>
  `,
})
export class AboutComponent {
  disable = false;
  errorMessage = '';
  label = '';
  id = '';
}

describe('BaseInputDirective', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  function getSelector(selector: string) {
    return fixture.debugElement.query(By.css(selector));
  }

  function getElement(selector: string) {
    return getSelector(selector).nativeElement;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, BaseInputDirective],
      imports: [BaseErrorModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should disable the input', () => {
    component.disable = true;
    fixture.detectChanges();

    const el = getElement('input');

    expect(el.style['background-color']).toBe('rgb(217, 217, 217)');
    expect(el.disabled).toBeTrue();
  });

  it('should enable the input', () => {
    component.disable = false;
    fixture.detectChanges();

    const el = getElement('input');

    expect(el.style['background-color']).toBe('unset');
    expect(el.disabled).toBeFalse();
  });

  it('should show and hide the error message', () => {
    expect(getElement('input').style['border-color']).toBe('rgb(55, 59, 64)');

    component.errorMessage = 'An error has occurred';
    fixture.detectChanges();

    let error = getSelector('base-error');

    expect(error).toBeTruthy();
    expect(getElement('input').style['border-color']).toBe('rgb(255, 0, 0)');

    component.errorMessage = '';
    fixture.detectChanges();

    error = getSelector('base-error');

    expect(error).toBeFalsy();
    expect(getElement('input').style['border-color']).toBe('rgb(55, 59, 64)');
  });

  it('should bind the input label to the id', () => {
    const id = 'label-id';
    const labelText = 'Name';

    component.id = id;
    fixture.detectChanges();

    let label = getSelector(`label[for=${id}]`);

    expect(label).toBeFalsy();

    component.label = labelText;
    fixture.detectChanges();

    label = getSelector(`label[for=${id}]`);
    expect(label.nativeElement.innerText).toBe(labelText);
  });

  it('should bind the id to the input label', () => {
    const id = 'label-id';
    const labelText = 'Name';

    component.label = labelText;
    fixture.detectChanges();

    let label = getSelector(`label[for=${id}]`);

    expect(label).toBeFalsy();

    component.id = id;
    fixture.detectChanges();

    label = getSelector(`label[for=${id}]`);
    expect(label.nativeElement.innerText).toBe(labelText);
  });
});
