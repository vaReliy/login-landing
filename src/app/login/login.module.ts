import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LoginRoutes } from './login-routes';

@NgModule({
  declarations: [LoginComponent, LandingComponent],
  imports: [CommonModule, LoginRoutes],
})
export class LoginModule {}
