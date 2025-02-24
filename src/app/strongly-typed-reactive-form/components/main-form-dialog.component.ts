import { Component, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-main-form-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, JsonPipe],
  template: `
    <h2 mat-dialog-title>{{ title }}</h2>
    <mat-dialog-content>
      <pre>{{ value | json }}</pre>
    </mat-dialog-content>
  `,
})
export class MainFormDialog {
  data = inject(MAT_DIALOG_DATA);
  value = this.data.value;
  title = this.data.title;
}
