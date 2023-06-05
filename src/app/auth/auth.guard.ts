import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';
import { GlobalRoute } from './global-routes';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthService)
    .isAuth()
    .pipe(
      tap((isAuth) => {
        if (!isAuth) {
          router.navigate([`/${GlobalRoute.LOGIN}`]);
        }
      })
    );
};
