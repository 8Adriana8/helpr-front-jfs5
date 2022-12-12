import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/cargo';
import { Perfil, PerfilMapping } from 'src/app/models/enums/perfil';
import { Funcionario } from 'src/app/models/funcionario';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  public cargo: Cargo[] = []

  public funcionario!: Funcionario

  public isLoading: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private toastr: ToastrService,
    private cargoService: CargoService
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
    this.initializeCargos()
  }

  private initializeCargos(): void {
    this.cargoService.findAll().subscribe(cargo => {
      this.cargo = cargo
    })
  }

  private initilizeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.funcionarioService.findById(id).subscribe((funcionario) => {
        this.funcionario = funcionario;
      });
    }
  }

  public update(formEdit: NgForm): void {
    if(formEdit.valid) {
      this.funcionarioService.update(this.funcionario).subscribe(() => {
        this.toastr.success("Funcionario editado.");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      this.toastr.error("Dados inválidos.");
    }
  }

  public uploadFile(event: any): void {
    this.isLoading = true; 

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      
      const foto = reader.result as string;
      this.funcionario.foto = foto
    };

    this.isLoading = false;
  }

}
