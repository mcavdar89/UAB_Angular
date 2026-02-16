import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export const permissionGuard = (perms: string[]): CanActivateFn => (route, state) => {

  const authService = inject(AuthService);


  const userPermissions = authService.getPersmissions();

  for (let perm of perms) {
    if (userPermissions?.includes(perm)) {
      return true;
    }

  }

  return false;
};
