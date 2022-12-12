import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FuturoClientesComponent } from './futuro-clientes/futuro-clientes.component';
import { FuturoCandidatosComponent } from './futuro-candidatos/futuro-candidatos.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    title: "Clientes | Helpr"
  },
  {
    path: 'new',
    component: NewClienteComponent,
    title: "Novo Cliente | Helpr"
  },
  {
    path: 'edit/:id',
    component: EditClienteComponent,
    title: "Editar Cliente | Helpr"
  },
  {
    path: 'futuros-clientes',
    component: FuturoClientesComponent,
    title: "Futuros Clientes | Helpr"
  },
  {
    path: 'futuros-candidatos',
    component: FuturoCandidatosComponent,
    title: "Futuros Candidatos | Helpr"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
