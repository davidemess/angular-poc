import { Component, inject, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainFormFactoryService } from '../services/main-form-factory.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { MainForm } from '../models/main-form.interface';
import { AddressFormComponent } from './address-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MainDto } from '../models/main-dto.model';

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
        <button
          mat-raised-button
          color="primary"
          type="submit"
          class="mx-2"
          [disabled]="form.invalid || form.pristine"
        >
          Submit
        </button>
        <button
          mat-raised-button
          color="primary"
          (click)="onReset()"
          class="mx-2"
          [disabled]="form.pristine"
        >
          Reset
        </button>
      </div>
    </form>
  `,
  styles: ``,
})
export class MainFormComponent implements OnInit {
  @Input() data?: MainDto;

  private readonly mainFormFactoryService = inject(MainFormFactoryService);

  public form: FormGroup<MainForm> = this.mainFormFactoryService.getForm();

  ngOnInit(): void {
    if (this.data) this.mainFormFactoryService.patchValue(this.form, this.data);
  }

  onSubmit() {
    let value = this.mainFormFactoryService.getValue(this.form);
    console.log(value);
    this.form.reset();
  }

  onReset() {
    this.form.reset();
  }
}
