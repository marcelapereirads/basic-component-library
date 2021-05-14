import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentLibComponent } from './basic-component-lib.component';

describe('BasicComponentLibComponent', () => {
  let component: BasicComponentLibComponent;
  let fixture: ComponentFixture<BasicComponentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicComponentLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
