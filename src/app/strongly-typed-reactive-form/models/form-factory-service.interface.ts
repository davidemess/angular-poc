import { AbstractControl, FormGroup } from '@angular/forms';

export interface FormFactoryService<
  T extends { [K in keyof T]: AbstractControl<any, any> },
  D
> {
  getForm(): FormGroup<T>;
  patchValue(form: FormGroup<T>, data: D): void;
  getValue(form: FormGroup<T>): D;
}
