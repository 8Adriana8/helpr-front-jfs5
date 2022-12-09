import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NewfuncionarioComponent } from './new-funcionarios/new-funcionario.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';

@NgModule({
  declarations: [
      FuncionariosComponent, 
      NewfuncionarioComponent, MeuPerfilComponent
    
    ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forChild()
  ]
})
export class FuncionariosModule { }
