import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule),
    title: "Login | Helpr"
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    title: "Home | Helpr"
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    title: "Clientes | Helpr"
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    title: "Chamados | Helpr"
  },

  {
    path: 'faq', loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule),
    title: "FAQ | Helpr"
  },
  {
    path: 'cargos', loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule),
    title: "Cargos | Helpr"

  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    title: "Funcionários | Helpr"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
