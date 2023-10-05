import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProducaoDetalheComponent } from './producao-detalhe/producao-detalhe.component';
import { ProducaoBuscaComponent } from './producao-busca/producao-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path:'vitrine', component:VitrineComponent},
  {path:'producao-detalhe', component:ProducaoDetalheComponent},
  {path:'producao-busca', component:ProducaoBuscaComponent},
  {path:'cesta', component:CestaComponent},
  {path:'login', component:LoginComponent},
  {path:'esqueci', component:EsqueciComponent},
  {path:'cadastro', component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
