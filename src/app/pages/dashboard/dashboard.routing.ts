import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './dashboard-view.component/dashboard-view.component';

const appRoutes: Routes = [
  { path: '',  component : DashboardViewComponent , pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {}