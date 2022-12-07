import { Component, OnInit } from '@angular/core';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { FuturoClienteService } from 'src/app/services/futuro-cliente.service';

@Component({
  selector: 'app-futuro-clientes',
  templateUrl: './futuro-clientes.component.html',
  styleUrls: ['./futuro-clientes.component.css']
})
export class FuturoClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  dataSource: FuturoCliente[] = [];

  constructor(private futuroClienteService: FuturoClienteService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(){
    this.futuroClienteService.findAll().subscribe(fclientes => {
      this.dataSource = fclientes
    })
  }

  public delete(id: number){

  }

}
