import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressForm } from '../models/address-form.interface';
import { FormFactoryService } from '../models/form-factory-service.interface';
import { AddressDto } from '../models/address-dto.model';

@Injectable({
  providedIn: 'root',
})
export class AddressFormFactoryService
  implements FormFactoryService<AddressForm, AddressDto>
{
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

  public patchValue(form: FormGroup<AddressForm>, value: AddressDto): void {
    form.patchValue({
      street: value.street,
      city: value.city,
      state: value.state,
      zipCode: value.zipCode,
    });
  }

  public getValue(form: FormGroup<AddressForm>): AddressDto {
    const formValue = form.getRawValue();
    return {
      ...new AddressDto(),
      street: formValue.street,
      city: formValue.city,
      state: formValue.state,
      zipCode: formValue.zipCode,
    };
  }
}
