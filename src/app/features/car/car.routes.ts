import { Routes } from '@angular/router';
import { authGuard } from '../../core/guard/auth-guard';

export const carRoutes: Routes = [
  {
    path: 'list',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/carlist/carlist').then(m => m.Carlist)
  },
  {
    path: 'form/:id',
    canActivate: [],
    loadComponent: () => import('./pages/car-form-page/car-form-page').then(m => m.CarFormPage)
  }
];