import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { FuturoClienteService } from 'src/app/services/futuro-cliente.service';

@Component({
  selector: 'app-futuro-clientes',
  templateUrl: './futuro-clientes.component.html',
  styleUrls: ['./futuro-clientes.component.css']
})
export class FuturoClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];
  dataSource: any = [];

  constructor(private futuroClienteService: FuturoClienteService) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(){
    this.futuroClienteService.findAll().subscribe(fclientes => {
      this.dataSource = new MatTableDataSource(fclientes);
    })
  }

  public delete(id: number){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
