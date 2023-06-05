import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalRoute } from '../auth/global-routes';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: GlobalRoute.LOGIN,
    component: LoginComponent,
  },
  {
    path: GlobalRoute.LANDING,
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoginRoutes {}
