import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'car', loadChildren: () => import('./features/car/car.routes').then(m => m.carRoutes) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes) },
  { path: 'rent', loadChildren: () => import('./features/rent/rent.routes').then(m => m.rentRoutes) },
  { path: 'lesson', loadChildren: () => import('./features/lesson/lesson.routes').then(m => m.lessonRoutes) },
  // { path: 'rent', loadComponent: () => import('./features/rent/pages/rent-form/rent-form').then(m => m.RentForm) }

];
