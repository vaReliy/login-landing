import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { nonAuthGuard } from './auth/non-auth.guard';
import { authGuard } from './auth/auth.guard';
import { GlobalRoute } from './auth/global-routes';

const routes: Routes = [
  {
    path: '',
    canActivate: [nonAuthGuard],
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: GlobalRoute.HOME,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./system/system.module').then((m) => m.SystemModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
