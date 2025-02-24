import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainFormComponent } from './strongly-typed-reactive-form/components/main-form.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'mainform', pathMatch: 'full', component: MainFormComponent },
  { path: '**', redirectTo: '/home' }
];
