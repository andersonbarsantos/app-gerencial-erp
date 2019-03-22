import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardViewComponent } from './dashboard-view.component/dashboard-view.component';
import { DashboardService } from './dashboard-service/dashboard.service'
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule
    , DashboardRoutingModule

  ],
  providers: [DashboardService]
})

export class DashboardModule { }
