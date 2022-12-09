import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailsComponent } from './details/details.component';
import { DetailsCargoComponent } from './details-cargo/details-cargo.component';
import { DetailsChamadoComponent } from './details-chamado/details-chamado.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DetailsComponent,
    DetailsCargoComponent,
    DetailsChamadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
