import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadosComponent } from './chamados/chamados.component';

const routes: Routes = [
  {
    path: '',
    component: ChamadosComponent,
    title: "Chamados | Helpr"
  },
  {
    path: 'new',
    component: NewChamadoComponent,
    title: "Novo Chamado | Helpr"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
