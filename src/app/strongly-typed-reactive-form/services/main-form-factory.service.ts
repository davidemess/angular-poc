import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainForm } from '../models/main-form.interface';
import { UserFormFactoryService } from './user-form-factory.service';
import { AddressFormFactoryService } from './address-form-factory.service';
import { MainDto } from '../models/main-dto.model';

@Injectable({
  providedIn: 'root',
})
export class MainFormFactoryService {
  private readonly fb = inject(FormBuilder);
  private readonly userFormFactoryService = inject(UserFormFactoryService);
  private readonly addressFormFactoryService = inject(
    AddressFormFactoryService
  );

  public getForm(): FormGroup<MainForm> {
    return this.fb.group<MainForm>({
      userForm: this.userFormFactoryService.getForm(),
      addressForm: this.addressFormFactoryService.getForm(),
    });
  }

  public patchValue(form: FormGroup<MainForm>, value: MainDto): void {
    form.patchValue({
      userForm: value.user,
      addressForm: value.address,
    });
  }

  public getValue(form: FormGroup<MainForm>): MainDto {
    const formValue = form.getRawValue();
    return {
      ...new MainDto(),
      user: formValue.userForm,
      address: formValue.addressForm,
    };
  }
}
