import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { EditCargoComponent } from './edit-cargo/edit-cargo.component';
import { NewCargoComponent } from './new-cargo/new-cargo.component';

const routes: Routes = [{ 
  path: '',
    component: CargosComponent,
    title: "Cargos | Helpr"
  },
  {
    path: 'new',
    component: NewCargoComponent,
    title: "Novo Cargo | Helpr"
  },
  {
    path: 'edit/:id',
    component: EditCargoComponent,
    title: "Editar Cargo | Helpr"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargosRoutingModule { }
