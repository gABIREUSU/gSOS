import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OS {
  idos: number;
  idpc: number;
  preco: number;
  descricao: string;
  status: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class OsService {

  private apiURL = "http://localhost:3000/os";

  constructor(private http: HttpClient) {}

  // listar OS por idpc
  listarOSporPC(idpc: number): Observable<OS[]> {
    return this.http.get<OS[]>(this.apiURL, {
      params: { idpc }
    });
  }
}
