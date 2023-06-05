import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRoute } from 'src/app/auth/global-routes';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private router: Router) {}

  login(): void {
    this.router.navigate([`/${GlobalRoute.LOGIN}`]);
  }
}
