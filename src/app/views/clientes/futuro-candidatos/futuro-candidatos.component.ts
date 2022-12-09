import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuturoCandidato } from 'src/app/models/futuro-candidato';
import { FuturoCandidatoService } from 'src/app/services/futuro-candidato.service';

@Component({
  selector: 'app-futuro-candidatos',
  templateUrl: './futuro-candidatos.component.html',
  styleUrls: ['./futuro-candidatos.component.css']
})
export class FuturoCandidatosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nome', 'email', 'descricaoHabilidades', 'setor', 'editar', 'excluir'];

  public dataSource!: MatTableDataSource<FuturoCandidato>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private futuroService: FuturoCandidatoService,
    ) { }

  ngOnInit(): void {
    this.initializeTables()
  }

  public initializeTables(): void {
    this.futuroService.findAll().subscribe(fCandidatos => {
      this.dataSource = new MatTableDataSource(fCandidatos);
      this.dataSource.paginator = this.paginator;
    })
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public delete(id: number){}
}
