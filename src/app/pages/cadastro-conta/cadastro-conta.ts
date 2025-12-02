import { Component } from '@angular/core';
import { LayoutLoginCadastro } from '../../components/layout-login-cadastro/layout-login-cadastro';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContaService } from '../../services/conta-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrimaryInput } from '../../components/primary-input/primary-input';

@Component({
  selector: 'app-cadastro-conta',
  imports: [LayoutLoginCadastro, CommonModule, ReactiveFormsModule, PrimaryInput],
  templateUrl: './cadastro-conta.html',
  styleUrl: './cadastro-conta.css',
})
export class CadastroConta {
  cadastroForm: FormGroup;
  errorMsg: string = "";

  constructor(private contaService: ContaService, private router: Router) {
    this.cadastroForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmaSenha: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const { login, senha, confirmaSenha } = this.cadastroForm.value;

    if (senha !== confirmaSenha) {
      this.errorMsg = "As senhas não coincidem!";
      return;
    }

    this.contaService.cadastrar({ login, senha }).subscribe({
      next: user => {
        console.log("Conta criada com sucesso:", user);
        this.router.navigate(['/login']); 
      },
      error: err => {
        this.errorMsg = err.message;
      }
    });
  }

}
