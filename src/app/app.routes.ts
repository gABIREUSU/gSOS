import { Routes } from '@angular/router';
import { Conta } from './pages/conta/conta';
import { CadastroPc } from './pages/cadastro-pc/cadastro-pc';
import { CadastroInput } from './components/cadastro-input/cadastro-input';

export const routes: Routes = [
    {path: 'conta', component: Conta},
    {path: 'cadastro-pc', component: CadastroPc},
    {path: 'cadastro-input', component: CadastroInput},
    


];
