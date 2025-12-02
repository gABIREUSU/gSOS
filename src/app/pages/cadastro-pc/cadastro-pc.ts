import { Component } from '@angular/core';
import { LayoutConta } from '../../components/layout-conta/layout-conta';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { PcService } from '../../services/pc-service';
import { ContaService } from '../../services/conta-service';

@Component({
  selector: 'app-cadastro-pc',
  imports: [LayoutConta, ReactiveFormsModule, PrimaryInput],
  templateUrl: './cadastro-pc.html',
  styleUrl: './cadastro-pc.css',
})
export class CadastroPc {

  CadastroForm!: FormGroup;

  constructor(
    private pcService: PcService,
    private contaService: ContaService
  ) {
    this.CadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required)
    });
  }

  salvarPc() {
    if (this.CadastroForm.invalid) {
      this.CadastroForm.markAllAsTouched();
      return;
    }

    const usuario = this.contaService.getUsuario();
    if (!usuario) {
      alert("Usuário não encontrado. Faça login novamente.");
      return;
    }

    const novoPc = {
      idconta: usuario.idconta,
      nome: this.CadastroForm.value.nome!,
      marca: this.CadastroForm.value.marca!,
      modelo: this.CadastroForm.value.modelo!
    };

    this.pcService.cadastrarPC(novoPc).subscribe({
      next: () => {
        alert("PC cadastrado com sucesso!");
        this.CadastroForm.reset();
      },
      error: err => alert("Erro ao salvar: " + err.message)
    });
  }
}
