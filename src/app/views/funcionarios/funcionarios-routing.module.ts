
import { NewfuncionarioComponent } from './new-funcionarios/new-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosComponent,
    title: "Funcionários | Helpr"
  },
  {
    path: 'new',
    component: NewfuncionarioComponent,
    title: "Novo Funcionário | Helpr"
  },
  {
    path: 'perfil',
    component: MeuPerfilComponent,
    title: "Perfil Funcionário | Helpr"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
