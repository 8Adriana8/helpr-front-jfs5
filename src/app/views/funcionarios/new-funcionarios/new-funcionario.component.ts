import { Router } from '@angular/router';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';


@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewfuncionarioComponent implements OnInit {

  public formfuncionario: FormGroup;
  public cargos: Cargo[] = [];
  public isLoading: Boolean = false;
  public cover: string = ""

  constructor(
    formBuilder: FormBuilder,
    private FuncionarioService: FuncionarioService,
    private router: Router,
    private cargoService: CargoService,
  ) {
    this.formfuncionario = formBuilder.group({
      nome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      cpf: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
      foto: [""]
    })
  }

  ngOnInit(): void {
    this.initializeCargos();
  }

  public initializeCargos(): void{
    this.cargoService.findAll().subscribe(response => {
    this.cargos = response
    })
  }

  public create(): void {
    if(this.formfuncionario.valid) {
      const funcionario: Funcionario = this.formfuncionario.value;

      this.FuncionarioService.create(funcionario).subscribe(() => {
        alert("funcionario cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

  public uploadFile(event: any): void {
    this.isLoading = true; 

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      
      const foto = reader.result as string;
      this.formfuncionario.controls['foto'].setValue(foto)
      console.log("aqui", this.formfuncionario.controls["foto"])
    };

    this.isLoading = false;
  }




}
