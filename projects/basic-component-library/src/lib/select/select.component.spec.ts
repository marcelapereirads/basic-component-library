import { SelectComponent } from './select.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('SelectComponent', () => {
  let fixture: ComponentFixture<SelectComponent>;
  let component: SelectComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SelectComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable select', () => {
    component.disabled = true;
    component.ngOnChanges({
      disabled: new SimpleChange(null, true, true)
    });
    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('.select__field')).nativeElement;

    expect(component.control.disabled).toBeTrue();
    expect(select).toHaveClass('disabled');
  });

  it('should enable select', () => {
    component.disabled = false;
    component.ngOnChanges({
      disabled: new SimpleChange(null, false, false)
    });
    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('.select__field')).nativeElement;

    expect(component.control.disabled).toBeFalse();
    expect(select).not.toHaveClass('disabled');
  });

  it('should load options', () => {
    const mockOptions = [
      {
        value: 'option1',
        viewValue: 'Option 1'
      },
      {
        value: 'option2',
        viewValue: 'Option 2'
      }
    ];
    component.options = mockOptions;
    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('.select__field')).nativeElement;

    expect(select.innerHTML).toContain('Option 1');
    expect(select.innerHTML).toContain('Option 2');
  });
});
