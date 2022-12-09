import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'cargo', 'editar', 'excluir'];
  public dataSource!: MatTableDataSource<Funcionario>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private FuncionarioService: FuncionarioService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.FuncionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = new MatTableDataSource(funcionarios);
      this.dataSource.paginator = this.paginator;
    });
  }

  public delete(id: number): void {
    let ok = this.toastr.warning("Tem certeza que deseja excluir?");
    if(ok) {
      this.FuncionarioService.delete(id).subscribe(() => {
        this.toastr.success("funcionario excluido.");
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
}
