import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'cargo', 'editar', 'excluir'];
  dataSource: Funcionario[] = [];

  constructor(
    private FuncionarioService: FuncionarioService
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.FuncionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = funcionarios;
    });
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.FuncionarioService.delete(id).subscribe(() => {
        alert("funcionario excluido.");
        this.initializeTable();
      });
    }
  }
}
