import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'car', loadChildren: () => import('./features/car/car.routes').then(m => m.carRoutes) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes) },

];
