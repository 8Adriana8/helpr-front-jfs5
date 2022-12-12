import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { FuncionarioGuard } from './guards/funcionario.guard';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
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
    canActivate: [ FuncionarioGuard ],
    title: "Clientes | Helpr"
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivate: [ FuncionarioGuard ],
    title: "Chamados | Helpr"
  },
  {
    path: 'faq', 
    loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule),
    title: "FAQ | Helpr"
  },
  {
    path: 'cargos', 
    loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule),
    canActivate: [ AdminGuard ],
    title: "Cargos | Helpr"
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    canActivate: [ AdminGuard ],
    title: "Funcionários | Helpr"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
