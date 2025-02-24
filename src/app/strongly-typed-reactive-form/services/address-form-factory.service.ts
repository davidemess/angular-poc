import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressForm } from '../models/address-form.interface';

@Injectable({
  providedIn: 'root',
})
export class AddressFormFactoryService {
  private readonly fb = inject(FormBuilder);

  public getForm(): FormGroup<AddressForm> {
    return this.fb.group<AddressForm>({
      street: this.fb.control<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      }),
      city: this.fb.control<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      }),
      state: this.fb.control<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      }),
      zipCode: this.fb.control<number>(0, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$'),
        ],
      }),
    });
  }
}
