import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { DetailsCargoComponent } from './details-cargo/details-cargo.component';
import { FuturoCandidatoComponent } from './futuro-candidato/futuro-candidato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FuturoClienteComponent } from './futuro-cliente/futuro-cliente.component';


@NgModule({
  declarations: [
    NavBarComponent,
    DetailsComponent,
    DetailsCargoComponent,
    FuturoCandidatoComponent,
    FuturoClienteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
