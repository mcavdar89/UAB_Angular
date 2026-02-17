import { Routes } from '@angular/router';
import { authGuard } from '../../core/guard/auth-guard';

export const lessonRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/lesson/lesson').then(m => m.Lesson)
  }
];