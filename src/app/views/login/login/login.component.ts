import { Credenciais } from './../../../models/credenciais';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { FuturoCandidato } from 'src/app/models/futuro-candidato';
import { FuturoCandidatoComponent } from 'src/app/components/futuro-candidato/futuro-candidato.component';
import { MatDialog } from '@angular/material/dialog';
import { FuturoClienteComponent } from 'src/app/components/futuro-cliente/futuro-cliente.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public rememberMe!: boolean;
  public email!: string;
  public senha!: string;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private cookie: CookieService,
    private dialog: MatDialog
  ) {
    this.formLogin = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadPage();
  }

  public signIn(): void {
    if(this.formLogin.valid) {
      // PROCESSO DE AUTENTICAR
      const credenciais: Credenciais = this.formLogin.value;

      if(this.rememberMe == true){
        this.cookie.set('email', credenciais.email);
        this.cookie.set('senha', credenciais.senha);
        this.cookie.set('rememberMe', this.rememberMe.toString());
      } else if(this.rememberMe == false){
        this.cookie.delete('email');
        this.cookie.delete('senha');
        this.cookie.delete('rememberMe');
      }
      this.authService.authenticate(credenciais).subscribe(response => {
        this.toastr.success("Bem-vindo(a)!");
        this.router.navigate(["/home"]);
      });
    }
    else {
      this.toastr.error("Dados inválidos.");
    }
  }

  public loadPage(){
    if(this.cookie.check('email')){
      this.email = this.cookie.get('email');
      this.senha = this.cookie.get('senha');
      this.rememberMe = this.cookie.get('rememberMe') == 'true';
    }
  }

  public rememberMeCheck(){
    if(this.rememberMe == true){
      this.rememberMe = false
    } else {
      this.rememberMe = true
    }
  }

  public openCadastro(){
    this.dialog.open(FuturoCandidatoComponent, {
      width: "900px",
    })
  }

  public openCadastroCliente(){
    this.dialog.open(FuturoClienteComponent, {
      width: "900px"
    })
  }

}
