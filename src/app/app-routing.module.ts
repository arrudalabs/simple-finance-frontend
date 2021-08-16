import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './users/cadastro/cadastro.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { DashgraphComponent } from './users/dashgraph/dashgraph.component';
import { DespesasComponent } from './users/despesas/despesas.component';
import { LoginComponent } from './users/login/login.component';
import { ReceitasComponent } from './users/receitas/receitas.component';
import { RecuperarsenhaComponent } from './users/recuperarsenha/recuperarsenha.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'recuperarsenha', component: RecuperarsenhaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'despesas', component: DespesasComponent },
  { path:'receitas', component:ReceitasComponent },
  { path: 'graph', component: DashgraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
