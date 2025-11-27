import { Component } from '@angular/core';
import { LayoutLoginCadastro } from '../../components/layout-login-cadastro/layout-login-cadastro';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { ContaService } from '../../services/conta-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [LayoutLoginCadastro, ReactiveFormsModule, PrimaryInput,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm!: FormGroup;
  errorMsg: string = "";

  constructor(private auth: ContaService, private router: Router) {

    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });

  }

  onSubmit() {
     console.log("SUBMIT DISPARADO");

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { login, senha } = this.loginForm.value;

    this.auth.login(login, senha).subscribe({
      next: user => {
        console.log("Logado como:", user);
        this.router.navigate(['/conta']);
      },
      error: err => {
        this.errorMsg = err.message;
      }
    });

  }
}
