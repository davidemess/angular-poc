import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainForm } from '../models/main-form.interface';
import { UserFormFactoryService } from './user-form-factory.service';
import { AddressFormFactoryService } from './address-form-factory.service';

@Injectable({
  providedIn: 'root',
})
export class MainFormFactoryService {
  private readonly fb = inject(FormBuilder);
  private readonly userFormFactoryService = inject(UserFormFactoryService);
  private readonly addressFormFactoryService = inject(
    AddressFormFactoryService,
  );

  public getForm(): FormGroup<MainForm> {
    return this.fb.group<MainForm>({
      userForm: this.userFormFactoryService.getForm(),
      addressForm: this.addressFormFactoryService.getForm(),
    });
  }
}
