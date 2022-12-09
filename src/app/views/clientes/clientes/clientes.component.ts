import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/components/details/details.component';

import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  public displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'detalhes', 'editar', 'excluir'];
  public dataSource!: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.dataSource = new MatTableDataSource(clientes);
      this.dataSource.paginator = this.paginator;
    });
  }

  public delete(id: number): void {
    let ok = this.toastr.warning("Tem certeza que deseja excluir?");
    if(ok) {
      this.clienteService.delete(id).subscribe(() => {
        this.toastr.success("Cliente excluido.");
        this.initializeTable();
      });
    }
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public openDetails(cliente: Cliente): void {
    this.dialog.open(DetailsComponent, {
      width: "400px",
      data: cliente
    });
}
}
