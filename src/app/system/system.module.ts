import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SystemRoutingModule],
})
export class SystemModule {}
