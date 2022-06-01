import { BaseInputComponent } from './base-input.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('BaseInputComponent', () => {
    let fixture: ComponentFixture<BaseInputComponent>;
    let component: BaseInputComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BaseInputComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseInputComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable input', () => {
        component.disabled = true;
        component.ngOnChanges({
            disabled: new SimpleChange(null, true, true),
        });
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css('.input__field')).nativeElement;

        expect(component.control.disabled).toBeTrue();
        expect(input).toHaveClass('disabled');
    });

    it('should enable input', () => {
        component.disabled = false;

        component.ngOnChanges({
            disabled: new SimpleChange(null, false, false),
        });
        fixture.detectChanges();

        const input = fixture.debugElement.query(By.css('.input__field')).nativeElement;

        expect(component.control.disabled).toBeFalse();
        expect(input).not.toHaveClass('disabled');
    });
});
