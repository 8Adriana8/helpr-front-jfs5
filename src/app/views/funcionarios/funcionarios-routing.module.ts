
import { NewfuncionarioComponent } from './new-funcionarios/new-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosComponent
  },
  {
    path: 'new',
    component: NewfuncionarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
