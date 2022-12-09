import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DetailsCargoComponent } from 'src/app/components/details-cargo/details-cargo.component';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'detalhes', 'editar', 'excluir'];
  public dataSource!: MatTableDataSource<Cargo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private cargoService: CargoService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.initializeTables()
  }

  public initializeTables(){
    return this.cargoService.findAll().subscribe(cargos => {
      this.dataSource = new MatTableDataSource(cargos);
      this.dataSource.paginator = this.paginator;
    })
  }

  public delete(id: number): void {}

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public openDetails(cargo: Cargo): void{
    this.dialog.open(DetailsCargoComponent, {
      width: "400px",
      data: cargo
    });
  }
}
