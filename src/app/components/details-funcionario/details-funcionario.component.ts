import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-details-funcionario',
  templateUrl: './details-funcionario.component.html',
  styleUrls: ['./details-funcionario.component.css']
})
export class DetailsFuncionarioComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public funcionario: Funcionario) { }

  ngOnInit(): void {
  }

}
