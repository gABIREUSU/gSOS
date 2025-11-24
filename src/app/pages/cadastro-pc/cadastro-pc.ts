import { Component} from '@angular/core';
import { LayoutConta } from '../../components/layout-conta/layout-conta';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroInput } from '../../components/cadastro-input/cadastro-input';



@Component({
  selector: 'app-cadastro-pc',
  imports: [LayoutConta,ReactiveFormsModule,CadastroInput],
  templateUrl: './cadastro-pc.html',
  styleUrl: './cadastro-pc.css',
})
export class CadastroPc {
  CadastroForm: FormGroup;
 
  constructor() {
    this.CadastroForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      marca: new FormControl('',Validators.required),
      modelo: new FormControl('',Validators.required)
    })

  }

}
