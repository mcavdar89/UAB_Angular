import { Routes } from '@angular/router';

export const carRoutes: Routes = [
  {
    path: '',
    // canActivate: [authGuard],
    loadComponent: () => import('./pages/rent-form/rent-form').then(m => m.RentForm)
  },

];