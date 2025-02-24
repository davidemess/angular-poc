import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressForm } from '../models/address-form.interface';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="form">
      <mat-form-field appearance="fill">
        <mat-label>Street</mat-label>
        <input matInput [formControl]="form.controls.street" required />
        <mat-error *ngIf="form.controls.street.invalid"
          >Street is required</mat-error
        >
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>City</mat-label>
        <input matInput [formControl]="form.controls.city" required />
        <mat-error *ngIf="form.controls.city.invalid"
          >City is required</mat-error
        >
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>State</mat-label>
        <input matInput [formControl]="form.controls.state" required />
        <mat-error *ngIf="form.controls.state.invalid"
          >State is required</mat-error
        >
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Postal Code</mat-label>
        <input matInput [formControl]="form.controls.zipCode" required />
        <mat-error *ngIf="form.controls.zipCode.invalid"
          >Postal Code is required</mat-error
        >
      </mat-form-field>
    </div>
  `,
  styles: ``,
})
export class AddressFormComponent {
  @Input({ required: true }) form!: FormGroup<AddressForm>;
}
