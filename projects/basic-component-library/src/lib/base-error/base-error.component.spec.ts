import { BaseErrorComponent } from './base-error.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('BaseErrorComponent', () => {
    let fixture: ComponentFixture<BaseErrorComponent>;
    let component: BaseErrorComponent;
    const errorMessage = 'The field is required';

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BaseErrorComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseErrorComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render error message', () => {
        component.message = errorMessage;
        component.control = new FormControl(null, Validators.required);
        component.control.markAsTouched();

        fixture.detectChanges();

        const error = fixture.debugElement.query(By.css('.error'));
        expect(error).toBeTruthy();
    });

    it('should hide error message when field is valid', () => {
        component.message = errorMessage;
        component.control = new FormControl('0000-000', Validators.required);
        component.control.markAsTouched();

        fixture.detectChanges();

        const error = fixture.debugElement.query(By.css('.error'));
        expect(error).toBeFalsy();
    });

    it('should hide error message when field is untouched', () => {
        component.message = errorMessage;
        component.control = new FormControl(null, Validators.required);

        fixture.detectChanges();

        const error = fixture.debugElement.query(By.css('.error'));
        expect(error).toBeFalsy();
    });
});