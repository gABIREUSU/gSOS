import { Routes } from '@angular/router';
import { Conta } from './pages/conta/conta';
import { CadastroPc } from './pages/cadastro-pc/cadastro-pc';
import { Login } from './pages/login/login';
import { CadastroConta } from './pages/cadastro-conta/cadastro-conta';
import { Home } from './pages/home/home';
import { AdminConsultaOs } from './pages/admin-consulta-os/admin-consulta-os';
import { AdminCadastroOs } from './pages/admin-cadastro-os/admin-cadastro-os';

export const routes: Routes = [
    { path: 'conta', component: Conta },
    { path: 'cadastro-pc', component: CadastroPc },
    { path: 'login', component: Login },
    { path: 'cadastro-conta', component: CadastroConta },
    { path: '', component: Home },
    { path: 'adminconsulta', component: AdminConsultaOs },
    { path: 'admincadastroOs', component: AdminCadastroOs},
    {
        path: 'historico-reparo/:idpc',
        loadComponent: () => import('./pages/historico-reparo/historico-reparo')
            .then(m => m.HistoricoReparo)
    }








];
