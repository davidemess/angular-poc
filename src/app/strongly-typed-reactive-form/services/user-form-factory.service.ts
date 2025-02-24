import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../models/user-form.interface';

@Injectable({
  providedIn: 'root',
})
export class UserFormFactoryService {
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
}
