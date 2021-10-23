import { ButtonComponent } from './button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  const mockAction = () => {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ButtonComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use primary style', () => {
    component.type = 'primary';

    fixture.detectChanges();

    const primaryButton = fixture.debugElement.query(By.css('.primary'));
    const secondaryButton = fixture.debugElement.query(By.css('.secondary'));

    expect(primaryButton).toBeTruthy();
    expect(secondaryButton).toBeFalsy();
  });

  it('should use secondary style', () => {
    component.type = 'secondary';

    fixture.detectChanges();

    const primaryButton = fixture.debugElement.query(By.css('.primary'));
    const secondaryButton = fixture.debugElement.query(By.css('.secondary'));

    expect(primaryButton).toBeFalsy();
    expect(secondaryButton).toBeTruthy();
  });

  it('should disable button', () => {
    const spy = spyOn(component, 'action');

    component.action = mockAction;
    component.disabled = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.primary'));

    expect(button.nativeElement).toHaveClass('disabled');

    component.handleClick();
    expect(spy).not.toHaveBeenCalled();
  });

  it('show enable button', () => {
    component.action = mockAction;

    const button = fixture.debugElement.query(By.css('.primary'));
    const spy = spyOn(component, 'action');

    component.handleClick();
    expect(spy).toHaveBeenCalled();
  });
});
