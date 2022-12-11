import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  public findAll(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        this.toastr.error("Erro ao buscar cargos")
        console.error(error)
        return EMPTY
      })
    )
  }
  public create(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(
      catchError(error => {
        this.toastr.error("Erro ao criar novo cargo.");
        console.error(error);
        return EMPTY;
      })
    )
}
}
