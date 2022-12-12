
import { NewfuncionarioComponent } from './new-funcionarios/new-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosComponent
  },
  {
    path: 'new',
    component: NewfuncionarioComponent
  },
  {
    path: 'perfil',
    component: MeuPerfilComponent
  },
  {
    path: 'edit/:id',
    component: EditFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
