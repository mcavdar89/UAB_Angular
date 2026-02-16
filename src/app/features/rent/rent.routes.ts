import { Routes } from '@angular/router';
import { permissionGuard } from '../../core/guard/permission-guard';

export const rentRoutes: Routes = [
  {
    path: '',
    canActivate: [permissionGuard(['admin', 'rent-add'])],
    loadComponent: () => import('./pages/rent-form/rent-form').then(m => m.RentForm)

  },

];