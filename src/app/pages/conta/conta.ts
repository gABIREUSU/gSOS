import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutConta } from '../../components/layout-conta/layout-conta';
import { RouterLink, Router } from '@angular/router';
import { PcService, PC } from '../../services/pc-service';
import { ContaService } from '../../services/conta-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [LayoutConta, RouterLink, CommonModule],
  templateUrl: './conta.html',
  styleUrls: ['./conta.css'],
  encapsulation: ViewEncapsulation.None
})
export class Conta implements OnInit {

  pcs: PC[] = [];
  idConta!: number;

  constructor(
    private pcService: PcService,
    private contaService: ContaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user = this.contaService.usuarioLogado();
    this.idConta = user!.idconta;

    this.carregarPCs();
  }

  carregarPCs() {
    this.pcService.listarPCsPorConta(this.idConta).subscribe(pcs => {
      this.pcs = pcs;
    });
  }

  
  excluirPc(id: string | undefined) {
    if (!id) return;

    if (confirm("Tem certeza que deseja excluir este PC?")) {
      this.pcService.excluirPC(id).subscribe(() => {
        this.carregarPCs();
      });
    }
  }





}
