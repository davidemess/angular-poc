import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainFormFactoryService } from '../services/main-form-factory.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { MainForm } from '../models/main-form.interface';
import { AddressFormComponent } from './address-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UserFormComponent,
    AddressFormComponent,
    MatFormFieldModule,
    MatButtonModule,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <app-user-form [form]="form.controls.userForm"></app-user-form>
      <app-address-form [form]="form.controls.addressForm"></app-address-form>
      <div>
        <button mat-raised-button color="primary" type="submit" class="mx-2">
          Submit
        </button>
        <button
          mat-raised-button
          color="primary"
          (click)="onReset()"
          class="mx-2"
        >
          Reset
        </button>
      </div>
    </form>
  `,
  styles: ``,
})
export class MainFormComponent {
  private readonly mainFormFactoryService = inject(MainFormFactoryService);

  public form: FormGroup<MainForm> = this.mainFormFactoryService.getForm();

  onSubmit() {
    console.log(this.form.getRawValue());
    this.form.reset();
  }

  onReset() {
    this.form.reset();
  }
}
