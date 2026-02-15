import { Routes } from '@angular/router';

export const carRoutes: Routes = [
  { path: 'list', loadComponent: () => import('./pages/carlist/carlist').then(m => m.Carlist) },
  { path: 'form/:id', loadComponent: () => import('./pages/car-form-page/car-form-page').then(m => m.CarFormPage) }
];