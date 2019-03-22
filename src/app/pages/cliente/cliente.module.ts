import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteModuleService } from './cliente-service/cliente.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const clientedRoutes: Routes = [
 // { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '', component: ClienteListComponent },
  { path: 'view', component: ClienteViewComponent },
];


@NgModule({
  declarations: [ClienteViewComponent, ClienteListComponent],
  imports: [
  
  CommonModule
    , NgxDatatableModule
    , RouterModule.forChild(clientedRoutes)

  ],
  providers: [ClienteModuleService]
})
export class ClienteModule { }

