import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

export interface PC {
  id?: string;
  idpc?: number;
  nome: string;
  marca: string;
  modelo: string;
  idconta: number;
}

@Injectable({
  providedIn: 'root',
})
export class PcService {

  private apiURL = "http://localhost:3000/pc";

  constructor(private http: HttpClient) { }

  // ========================= CADASTRAR =========================
  cadastrarPC(pc: PC): Observable<PC> {
    return this.http.get<PC[]>(this.apiURL).pipe(
      map(lista => {
        const ultimoId = lista.length > 0
          ? Math.max(...lista.map(p => p.idpc || 0))
          : 0;

        const novoIdpc = ultimoId + 1;

        // devolve PC com idpc gerado
        return { ...pc, idpc: novoIdpc };
      }),
      switchMap(pcComId => this.http.post<PC>(this.apiURL, pcComId))
    );
  }

  // ========================= LISTAR POR CONTA =========================
  listarPCsPorConta(idconta: number): Observable<PC[]> {
    return this.http.get<PC[]>(this.apiURL, {
      params: { idconta }
    });
  }

  // ========================= EXCLUIR =========================
  excluirPC(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
