import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { FuturoClienteService } from 'src/app/services/futuro-cliente.service';

@Component({
  selector: 'app-futuro-clientes',
  templateUrl: './futuro-clientes.component.html',
  styleUrls: ['./futuro-clientes.component.css']
})
export class FuturoClientesComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir'];

  public dataSource!: MatTableDataSource<FuturoCliente>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private futuroClienteService: FuturoClienteService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.initializeTable()
  }

  public initializeTable(){
    this.futuroClienteService.findAll().subscribe(fclientes => {
      this.dataSource = new MatTableDataSource(fclientes);
      this.dataSource.paginator = this.paginator;
    })
  }

  public delete(id: number): void {
    this.futuroClienteService.delete(id).subscribe(() => {
      this.toastr.success("Futuro Cliente deletado com sucesso")
      this.initializeTable()
    })
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
