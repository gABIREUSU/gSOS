import { Component } from '@angular/core';
import { AdminLayoutConta } from "../../components/admin-layout-conta/admin-layout-conta";
import { PrimaryInput } from "../../components/primary-input/primary-input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PcService } from '../../services/pc-service';
import { ContaService } from '../../services/conta-service';
import { OsService } from '../../services/os-service';

@Component({
  selector: 'app-admin-cadastro-os',
  imports: [AdminLayoutConta, PrimaryInput, ReactiveFormsModule],
  templateUrl: './admin-cadastro-os.html',
  styleUrl: './admin-cadastro-os.css'
})
export class AdminCadastroOs {
  nomeBuscado: string = '';
  CadastroForm!: FormGroup;

  constructor(
    private pcService: PcService,
    private contaService: ContaService,
    private osService: OsService
  ) {

  this.CadastroForm = new FormGroup({
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      preco: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required)
    });
}

cadastrarOS() {
    if (this.CadastroForm.invalid) {
      this.CadastroForm.markAllAsTouched();
      return;
    }

    const usuario = this.contaService.getUsuario();
    if (!usuario) {
      alert("Usuário não encontrado. Faça login novamente.");
      return;
    }

    const novaOs = {
    idconta: usuario.idconta,
    marca: this.CadastroForm.value.marca!,
    modelo: this.CadastroForm.value.modelo!,
    preco: this.CadastroForm.value.preco!,
    descricao: this.CadastroForm.value.descricao!,
    status: this.CadastroForm.value.status!,
    data: this.CadastroForm.value.data!
    };

    this.osService.cadastrarOS(novaOs).subscribe({
      next: () => {
        alert("OS cadastrada com sucesso!");
        this.CadastroForm.reset();
      },
      error: err => alert("Erro ao salvar: " + err.message)
    });

    this.contaService.getUsuarioByLogin(this.nomeBuscado).subscribe((usuarios) => {
  console.log(usuarios); // aqui você recebe os usuários filtrados
});

  }
  
}
