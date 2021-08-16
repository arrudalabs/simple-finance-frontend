import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { CadastroComponent } from './users/cadastro/cadastro.component';
import { RecuperarsenhaComponent } from './users/recuperarsenha/recuperarsenha.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { DespesasComponent } from './users/despesas/despesas.component';
import { ReceitasComponent } from './users/receitas/receitas.component';
import { DashgraphComponent } from './users/dashgraph/dashgraph.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarsenhaComponent,
    DashboardComponent,
    DespesasComponent,
    ReceitasComponent,
    DashgraphComponent
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
