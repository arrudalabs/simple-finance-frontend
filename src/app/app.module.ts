import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { CadastroComponent } from './users/cadastro/cadastro.component';
import { RecuperarsenhaComponent } from './users/recuperarsenha/recuperarsenha.component';
import { IndexComponent } from './users/index/index.component';
import { NavbarComponent } from './users/navbar/navbar.component';
import { MenulateralComponent } from './users/menulateral/menulateral.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarsenhaComponent,
    IndexComponent,
    NavbarComponent,
    MenulateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
