import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatToolbarModule
  ],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <button mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon>menu</mat-icon>
        </button>
        <span class="spacer"></span>
        <span>{{ title }}</span>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-menu #menu="matMenu">
      <button mat-menu-item [routerLink]="['/mainform']">
        <mat-icon>dvr</mat-icon>
        <span>Strongly typed Reactive Form</span>
      </button>
      <button mat-menu-item [routerLink]="['/dynamicform']">
        <mat-icon>dynamic_form</mat-icon>
        <span>Dynamic Form</span>
      </button>
    </mat-menu>
  `,
  styles: ``
})
export class NavbarComponent {
  title = 'angular-poc';
}
