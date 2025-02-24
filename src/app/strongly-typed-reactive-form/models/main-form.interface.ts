import { FormGroup } from '@angular/forms';
import { AddressForm } from './address-form.interface';
import { UserForm } from './user-form.interface';

export interface MainForm {
  userForm: FormGroup<UserForm>;
  addressForm: FormGroup<AddressForm>;
}
