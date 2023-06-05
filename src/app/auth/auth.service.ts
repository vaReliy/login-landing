import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalRoute } from './global-routes';

const AUTH_KEY = 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    const isAuth = !!localStorage.getItem(AUTH_KEY);
    this.isAuth$.next(isAuth);
  }

  isAuth(): Observable<boolean> {
    return this.isAuth$;
  }

  doLogin(): void {
    localStorage.setItem(AUTH_KEY, 'true');
    this.isAuth$.next(true);
    this.router.navigate([`/${GlobalRoute.HOME}`]);
  }

  doLogout(): void {
    localStorage.setItem(AUTH_KEY, '');
    this.isAuth$.next(false);
    this.router.navigate([`/${GlobalRoute.LOGIN}`]);
  }
}
