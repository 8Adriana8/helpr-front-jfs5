import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-details-chamado',
  templateUrl: './details-chamado.component.html',
  styleUrls: ['./details-chamado.component.css']
})
export class DetailsChamadoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public chamado: Chamado) { }

  ngOnInit(): void {
  }
}
