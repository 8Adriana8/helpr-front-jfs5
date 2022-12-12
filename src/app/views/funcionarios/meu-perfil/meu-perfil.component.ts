import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  public displayedColumns = ['id', 'nome', 'email', 'telefone', 'cargo', 'cpf', 'foto'];

  public funcionario: Funcionario = {
    nome:'',
    cpf:'',
    email:'',
    foto: '',
    id: 0,
    cargo:{
      nome:'',
      descricao:'',
      salario: 0,
    }
  };
   

  constructor(
    private funcionarioService: FuncionarioService,
  ) { }

  ngOnInit(): void {
    this.initializePage()
  }
  
  public initializePage(){
    const email:string | null = localStorage.getItem("email");
    console.log(email)

    if(email){
      this.funcionarioService.findByEmail(email).subscribe(funcionario => {
      this.funcionario = funcionario;
      this.funcionario.perfil = funcionario.perfil
       console.log(this.funcionario)
      })
    }
  }


  
}
