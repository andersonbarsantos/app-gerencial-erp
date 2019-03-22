import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { AuthGuard } from './guard/auth-guard';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './pages/login/login-view/login-view.component';


import { DadosSQL } from './repository/repository-sqlserver';
import { DadosOracle } from './repository/repository-oracle';
import { HomeComponent } from './pages/home/home-view/home.component';
import { FrameLoginComponent } from './frame-login/frame-login.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppConfigService } from './app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeComponent,
    FrameLoginComponent,
  ],
  imports: [
    BrowserModule
    , NgxDatatableModule
    , ComponentsModule
    , AppRoutingModule
  ],
  providers: [
    AuthGuard
    , AppConfigService
    , { provide: 'IDadosServiceToken', useClass: DadosSQL }    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
