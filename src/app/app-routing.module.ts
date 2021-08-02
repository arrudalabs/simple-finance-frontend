import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './users/cadastro/cadastro.component';
import { IndexComponent } from './users/index/index.component';
import { LoginComponent } from './users/login/login.component';
import { RecuperarsenhaComponent } from './users/recuperarsenha/recuperarsenha.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'recuperarsenha', component: RecuperarsenhaComponent },
  { path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
