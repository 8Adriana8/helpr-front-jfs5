import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturoCandidato } from '../models/futuro-candidato';

@Injectable({
  providedIn: 'root'
})
export class FuturoCandidatoService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public findAll(): Observable<FuturoCandidato[]> {
    return this.http.get<FuturoCandidato[]>(`${API_CONFIG.baseUrl}/candidatos`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar futuro candidato")
        console.error(error)
        return EMPTY
      })
    )
  }

  public create(fCandidato: FuturoCandidato): Observable<FuturoCandidato> {
    const data = {
      nomeCompleto: fCandidato.nomeCompleto,
      email: fCandidato.email,
      descricaoHabilidades: fCandidato.descricaoHabilidades,
      setor: fCandidato.setor
    }

    return this.http.post<FuturoCandidato>(`${API_CONFIG.baseUrl}/candidatos`, data).pipe(
      catchError(error => {
        this.toastr.error("Erro ao criar Futuro Candidato")
        console.error(error)
        return EMPTY
      })
    )
  }

  public delete(id: number): Observable<FuturoCandidato> {
    return this.http.delete<FuturoCandidato>(`${API_CONFIG.baseUrl}/candidatos/${id}`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao deletar futuro candidato")
        console.error(error)
        return EMPTY
    }))
  }
}
