import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError, switchMap  } from 'rxjs';

export interface Conta {
  idconta: number;
  login: string;
  senha: string;
  nivelacesso: number;
}

@Injectable({ providedIn: 'root' })
export class ContaService {

  private apiURL = "http://localhost:3000/contas";

  
  usuarioLogado = signal<Conta | null>(null);

  constructor(private http: HttpClient) {
    this.carregarUsuarioSalvo();
  }

  // ================= LOGIN =================
  login(login: string, senha: string) {
    return this.http.get<Conta[]>(this.apiURL, {
      params: { login, senha }
    }).pipe(

      map(contas => {
        if (contas.length === 0) {
          throw new Error("Login ou senha inválidos"); 
        }

        const user = contas[0];

        
        this.usuarioLogado.set(user);

        
        localStorage.setItem("usuario", JSON.stringify(user));

        return user;
      }),

      catchError(err => {
        return throwError(() => err);
      })
    );
  }

  // ============ GET DO USUÁRIO LOGADO ============
  getUsuario() {
    return this.usuarioLogado();
  }

  // ============ AUTO LOGIN AO ABRIR O SISTEMA ============
  carregarUsuarioSalvo() {
    const data = localStorage.getItem("usuario");
    if (data) {
      this.usuarioLogado.set(JSON.parse(data));
    }
  }
  // ============ CADASTRO============
 cadastrar(conta: { login: string; senha: string }) {
  // Pega todas as contas para verificar login e gerar idconta
  return this.http.get<Conta[]>(this.apiURL).pipe(
    map(contas => {
      // Verifica se o login já existe
      if (contas.some(c => c.login === conta.login)) {
        throw new Error('Login já existe');
      }

      // Novo idconta = maior idconta atual + 1
      const novoIdConta = contas.length > 0 ? Math.max(...contas.map(c => c.idconta)) + 1 : 1;

      // Cria a nova conta com nivelacesso = 1 e idconta gerado
      const novaConta = { ...conta, nivelacesso: 1, idconta: novoIdConta };

      return novaConta;
    }),
    // POST da nova conta
    switchMap(novaConta => this.http.post<Conta>(this.apiURL, novaConta)),
    catchError(err => throwError(() => err))
  );
}




}
