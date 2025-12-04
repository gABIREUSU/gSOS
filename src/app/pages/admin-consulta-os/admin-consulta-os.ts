import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject, signal, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

// NOTE: Assumindo que você tem acesso aos modelos e serviços (Ajuste os caminhos se necessário)
import { os, OsService } from '../../services/os-service'; 
import { ContaService } from '../../services/conta-service'; 
import { PC, PcService } from '../../services/pc-service'; 
import { AdminLayoutConta } from '../../components/admin-layout-conta/admin-layout-conta';



@Component({
  selector: 'app-admin-consulta-os',
  standalone: true, // Adicionando standalone: true, se for o caso
  imports: [AdminLayoutConta, CommonModule],
  templateUrl: './admin-consulta-os.html',
  styleUrl: './admin-consulta-os.css', // Assumindo que este arquivo de estilos existe
  encapsulation: ViewEncapsulation.None
})
export class AdminConsultaOs implements OnInit {

  constructor(
    private osService: OsService,
    private contaService: ContaService
  ) { }

    
    os: os[] = [];
    
    idos!: number;
    idConta!: number;
    

    ngOnInit(): void {

    const user = this.contaService.usuarioLogado();
    this.idConta = user!.idconta;
        this.carregarOs();
    }


carregarOs() {
  this.osService.listarOs().subscribe(os => {
    this.os = os;
  });
}

  deleteOs(id: string | undefined) {
    if (!id) return;

    if (confirm("Tem certeza que deseja excluir esta OS?")) {
      this.osService.deleteOs(id).subscribe(() => {
        this.carregarOs();
      });
    }
  }
    
}