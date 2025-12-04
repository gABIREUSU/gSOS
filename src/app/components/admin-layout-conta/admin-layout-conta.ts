import { CommonModule } from '@angular/common';
import { Component, effect, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Conta, ContaService } from '../../services/conta-service';
@Component({
  selector: 'app-admin-layout-conta',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-layout-conta.html',
  styleUrl: './admin-layout-conta.css'
})
export class AdminLayoutConta {

 @Input() title: String = "";
  @Input() PrimaryBtnText: String = "";
  @Input() SecondBtnText: String = "";
  @Input() title2: String = "";
  @Input() layoutClass: string = '';
  @Input() headerClass: string = '';
  @Input() mainClass: string = '';
  @Input() buttonClass: string = '';

  nomeUsuario: string = 'Usuário';

  constructor(private contaService: ContaService) {
    
    effect(() => {
      const usuario: Conta | null = this.contaService.usuarioLogado();
      this.nomeUsuario = usuario ? usuario.login : 'Usuário';
    });
  }
}