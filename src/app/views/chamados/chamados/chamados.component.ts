import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DetailsChamadoComponent } from 'src/app/components/details-chamado/details-chamado.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];

  public dataSource!: MatTableDataSource<Chamado>;

  public showSpinner: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private chamadoService: ChamadoService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.showSpinner = true;
    setTimeout(() => {
    this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = new MatTableDataSource(chamados);
      this.showSpinner = false;
      this.dataSource.paginator = this.paginator;
    });

  }, 1000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openDetails(chamado: Chamado): void{
   this.dialog.open(DetailsChamadoComponent, {
     width: "550px",
      data: chamado
   });
  }

}
