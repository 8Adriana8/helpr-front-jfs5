import { Component, Inject, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FuturoCliente } from 'src/app/models/futuro-cliente';
import { FuturoClienteService } from 'src/app/services/futuro-cliente.service';

@Component({
  selector: 'app-futuro-cliente',
  templateUrl: './futuro-cliente.component.html',
  styleUrls: ['./futuro-cliente.component.css']
})
export class FuturoClienteComponent implements OnInit {

  public formFuturoCliente: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) 
  public futuroCliente: FuturoCliente,
  public futuroClienteService: FuturoClienteService,
  private toastr: ToastrService,
  formBuilder: FormBuilder
  ) { 
    this.formFuturoCliente = formBuilder.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      cpf: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formFuturoCliente.valid) {
      const futuroCliente: FuturoCliente = this.formFuturoCliente.value
      this.futuroClienteService.create(futuroCliente).subscribe(fCliente => {
        this.toastr.success("Futuro Cliente cadastrado com sucesso")
      })
    } else {
      this.toastr.error("Dados invalidos")
    }
  }

}
