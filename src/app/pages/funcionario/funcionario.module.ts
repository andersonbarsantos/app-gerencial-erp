import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioModuleService } from './funcionario-service/funcionario.service';

const funcionarioRoutes: Routes = [
  { path: '', component: FuncionarioListComponent },
  
];

@NgModule({
  declarations: [ FuncionarioListComponent],
  imports: [
    CommonModule
    , RouterModule.forChild(funcionarioRoutes)

  ],
  providers: [FuncionarioModuleService]
})
export class FuncionarioModule { }

