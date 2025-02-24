import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  template: `
    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <mat-list>
        <mat-list-item>
          <button mat-button [routerLink]="['/mainform']">
            <mat-icon>dvr</mat-icon>
            <span>Strongly typed Reactive Form</span>
          </button>
        </mat-list-item>
        <mat-list-item>
          <button mat-button [routerLink]="['/dynamicform']">
            <mat-icon>dynamic_form</mat-icon>
            <span>Dynamic Form</span>
          </button>
        </mat-list-item>
      </mat-list>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
