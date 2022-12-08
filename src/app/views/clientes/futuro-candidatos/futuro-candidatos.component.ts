import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FuturoCandidatoService } from 'src/app/services/futuro-candidato.service';

@Component({
  selector: 'app-futuro-candidatos',
  templateUrl: './futuro-candidatos.component.html',
  styleUrls: ['./futuro-candidatos.component.css']
})
export class FuturoCandidatosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'descricaoHabilidades', 'setor', 'editar', 'excluir'];
  dataSource:any = [];

  constructor(private futuroService: FuturoCandidatoService) { }

  ngOnInit(): void {
    this.initializeTables()
  }

  public initializeTables(): void {
    this.futuroService.findAll().subscribe(fCandidatos => {
      this.dataSource = new MatTableDataSource(fCandidatos)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public delete(id: number){}
}
