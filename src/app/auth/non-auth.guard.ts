import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map, tap } from 'rxjs';
import { GlobalRoute } from './global-routes';

export const nonAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(AuthService)
    .isAuth()
    .pipe(
      tap((isAuth: boolean) => {
        if (isAuth) {
          router.navigate([`/${GlobalRoute.HOME}`]);
        }
      }),
      map((v) => !v)
    );
};
