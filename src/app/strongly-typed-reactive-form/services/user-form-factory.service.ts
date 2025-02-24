import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../models/user-form.interface';
import { FormFactoryService } from '../models/form-factory-service.interface';
import { UserDto } from '../models/user-dto.model';

@Injectable({
  providedIn: 'root',
})
export class UserFormFactoryService
  implements FormFactoryService<UserForm, UserDto>
{
  private readonly fb = inject(FormBuilder);

  public getForm(): FormGroup<UserForm> {
    return this.fb.group<UserForm>({
      firstName: this.fb.control<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      }),
      lastName: this.fb.control<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      }),
    });
  }

  public patchValue(form: FormGroup<UserForm>, value: UserDto): void {
    form.patchValue({
      firstName: value.firstName,
      lastName: value.lastName,
    });
  }

  public getValue(form: FormGroup<UserForm>): UserDto {
    const formValue = form.getRawValue();
    return {
      ...new UserDto(),
      firstName: formValue.firstName,
      lastName: formValue.lastName,
    };
  }
}
