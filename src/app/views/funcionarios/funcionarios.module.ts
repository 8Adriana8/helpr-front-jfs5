import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask'
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NewfuncionarioComponent } from './new-funcionarios/new-funcionario.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AvatarPipe } from 'src/app/pipes/avatar.pipe';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';

@NgModule({
  declarations: [
      FuncionariosComponent, 
      NewfuncionarioComponent, 
      MeuPerfilComponent,
      AvatarPipe,
      EditFuncionarioComponent,
    
    ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forChild(),
    NgxMatFileInputModule,
  ]
})
export class FuncionariosModule { }
