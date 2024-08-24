import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;

  }));

  it('should show error message on field touche and error present', () => {
    component.field = new FormGroup({ anyField: new FormControl() })
    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = "anyError"
    expect(component.shouldShowComponent()).toBeTruthy();

  });

  it('should hide error message on field not touched ', () => {
    component.field = new FormGroup({ anyField: new FormControl()});

    component.field.setErrors({ anyError: true });
    component.error = "anyError";
    expect(component.shouldShowComponent()).toBeFalsy();

  });

  it('should hide error message on field touched, but no error ', () => {
    component.field = new FormGroup({ anyField: new FormControl() })
    component.field.markAsTouched();

    component.error = "anyError";
    expect(component.shouldShowComponent()).toBeFalsy();

  });

  it('should hide error message on field touched and has error, but it is different error', () => {
    component.field = new FormGroup({ anyField: new FormControl() })
    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = "anotherError";
    expect(component.shouldShowComponent()).toBeFalsy();

  });
});

