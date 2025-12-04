import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';

// --- Interfaces: Adicionado o 'export' para que o componente possa importar ---
export interface os {
  id?: string;
  idos: number;
  idpc: number;
  preco: number;
  descricao: string;
  status: 'Concluída' | 'Em Andamento' | 'Pendente' | string;
  data: string;
}
// -----------------------------------------------------------------------------

@Injectable({
  providedIn: 'root',
})


export class OsService {

  cadastrarOS(os: any): Observable<any> {
  return this.http.get<any[]>(this.apiURL).pipe(
    map(lista => {
      const ultimoId = lista.length > 0
        ? Math.max(...lista.map(o => o.idos || 0))
        : 0;

      const novoIdOs = ultimoId + 1;

      // devolve OS com id gerado
      return { ...os, idos: novoIdOs };
    }),
    switchMap(osComId => this.http.post<any>(this.apiURL, osComId))
  );
}

  // 1. URL base para a coleção 'os' no JSON Server
  private apiURL = 'http://localhost:3000/os';

  // 2. Injeção de dependência via 'inject()' (padrão moderno Angular)
  private http = inject(HttpClient);

  // Função utilitária para lidar com erros
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido no OsService.';
    console.error(errorMessage, error);
    return throwError(() => new Error(errorMessage));
  }

  // --- MÉTODOS EXISTENTES / MANTIDOS ---

  // Método que estava no seu código original (usando constructor injection)
  // Foi ajustado para usar 'this.http' injetado via 'inject()'
  listarOSporPC(idpc: number): Observable<os[]> {
    return this.http.get<os[]>(this.apiURL, {
      params: { idpc }
    }).pipe(
      catchError(this.handleError)
    );
  }

  // Este método estava incompleto/incorreto. Vamos mantê-lo com o nome original 
  // do seu código base, mas removendo o parâmetro 'idos' que não é usado.
  // Assumo que ele deveria listar todas as OSs, mas o nome é ambíguo.
  listarOs(): Observable<os[]> {
    console.warn("O método listarOs() com parâmetro 'idos' foi chamado. Use getOs() para todas as OS.");
    return this.http.get<os[]>(this.apiURL).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Obtém todas as Ordens de Serviço.
   * Método referenciado no AdminConsultaOsComponent.
   */
getOs(): Observable<os[]> {
  return this.http.get<os[]>(this.apiURL).pipe(
    catchError(this.handleError)
  );
}

    // --- CRUD COMPLETO ADICIONADO ---

  /** Criar nova OS */
  createOs(data: os): Observable<os> {
    return this.http.post<os>(this.apiURL, data).pipe(
      catchError(this.handleError)
    );
  }

  /** Buscar OS por ID */
  getOsById(id: number): Observable<os> {
    return this.http.get<os>(`${this.apiURL}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /** Atualizar OS */
  updateOs(idos: number, changes: Partial<os>): Observable<os> {
    return this.http.patch<os>(`${this.apiURL}/${idos}`, changes).pipe(
      catchError(this.handleError)
    );
  }

  /** Excluir OS */
  deleteOs(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  // Você pode adicionar outros métodos de CRUD aqui, como:
  // updateOs(idos: number, dados: Partial<os>): Observable<os> { ... }
}