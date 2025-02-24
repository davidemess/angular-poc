import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserForm } from '../models/user-form.interface';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="form">
      <mat-form-field appearance="fill">
        <mat-label>First Name</mat-label>
        <input matInput [formControl]="form.controls.firstName" required />
        <mat-error *ngIf="form.controls.firstName.invalid"
          >First Name is required</mat-error
        >
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Last Name</mat-label>
        <input matInput [formControl]="form.controls.lastName" required />
        <mat-error *ngIf="fform.controls.lastName.invalid"
          >Last Name is required</mat-error
        >
      </mat-form-field>
    </div>
  `,
  styles: ``,
})
export class UserFormComponent {
  @Input({ required: true }) form!: FormGroup<UserForm>;
}
