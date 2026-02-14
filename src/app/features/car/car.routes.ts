import { Routes } from '@angular/router';

export const carRoutes: Routes = [
  { path: 'list', loadComponent: () => import('./pages/carlist/carlist').then(m => m.Carlist) }
];