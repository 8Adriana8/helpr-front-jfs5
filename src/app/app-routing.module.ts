import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { FuncionarioGuard } from './guards/funcionario.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [ FuncionarioGuard ]
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivate: [ FuncionarioGuard ]
  },

  { path: 'faq', 
    loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule),
  },

  { 
    path: 'cargos',
    loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule),
    canActivate: [ AdminGuard ] 
  },

  {
    path: 'funcionarios',
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    canActivate: [ AdminGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
