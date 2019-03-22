import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth-guard';

import { LoginViewComponent } from './pages/login/login-view/login-view.component';
import { HomeComponent } from './pages/home/home-view/home.component';
import { FrameLoginComponent } from './frame-login/frame-login.component';



const appRoutes: Routes = [
  {
    path: ''
    , component: FrameLoginComponent
    , children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }
      , { path: 'login', component: LoginViewComponent }],
  },
  {
    path: 'dashboard'
    , loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    // , canActivate: [AuthGuard]
  },
  {
    path: 'clientes'
    , loadChildren: './pages/cliente/cliente.module#ClienteModule'
    //, canActivate: [AuthGuard]
  },
  {
    path: 'funcionarios'
    , loadChildren: './pages/funcionario/funcionario.module#FuncionarioModule'
    //, canActivate: [AuthGuard]
  },
  {
    path: 'home'
    , component: HomeComponent
    // , children: [
    //   { path: '', component:HomeComponent ,useAsDefault: true }

    //   ,
    // ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})

export class AppRoutingModule { }