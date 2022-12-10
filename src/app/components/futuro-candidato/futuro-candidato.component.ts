import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FuturoCandidato, Setor, SetorMapping } from 'src/app/models/futuro-candidato';
import { FuturoCandidatoService } from 'src/app/services/futuro-candidato.service';

@Component({
  selector: 'app-futuro-candidato',
  templateUrl: './futuro-candidato.component.html',
  styleUrls: ['./futuro-candidato.component.css']
})
export class FuturoCandidatoComponent implements OnInit {

  public formFuturoCandidato: FormGroup;

  public setorMaping = SetorMapping

  public setor = Object.values(Setor)


  constructor(@Inject(MAT_DIALOG_DATA) 
  public futuroCandidato: FuturoCandidato, 
  private futuroService: FuturoCandidatoService,
  private toastr: ToastrService,
  formBuilder: FormBuilder
  ) { 
    this.formFuturoCandidato = formBuilder.group({
      nomeCompleto: ["", [Validators.required]],
      email: ["", Validators.required],
      descricaoHabilidades: ["", Validators.required],
      setor: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.setor
  }

  public create(): void {
    if(this.formFuturoCandidato.valid){
      const candidato: FuturoCandidato = this.formFuturoCandidato.value;
      console.log(candidato)
      this.futuroService.create(candidato).subscribe(fCandidato => {
        this.toastr.success("Candidato cadastrado com sucesso")
      })
    } else {
      this.toastr.error("Dados invalidos")
    }
  }

}
