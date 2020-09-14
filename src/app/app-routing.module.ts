import { MedicoDetailsComponent } from './details-medico/details-medico.component';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { UpdateMedicoComponent } from './update-medico/update-medico.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { UpdateConsultaComponent } from './update-consulta/update-consulta.component';
import { DetailsConsultaComponent } from './details-consulta/details-consulta.component';
import { CreateConsultaComponent } from './create-consulta/create-consulta.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path:'Login', component: LoginComponent},
  { path: 'medicos', component: MedicoListComponent},
  { path: 'medicos/add', component: CreateMedicoComponent },
  { path: 'callback', component: CallbackComponent},
  { path: 'medicos/update/:id', component: UpdateMedicoComponent },
  { path: 'medicos/details/:id', component: MedicoDetailsComponent },
  { path: 'clientes', component: ClienteListComponent},
  { path: 'clientes/add', component: CreateClienteComponent},
  { path: 'clientes/update/:id', component: UpdateClienteComponent},
  { path: 'clientes/details/:id', component: DetailsClienteComponent},
  { path: 'consultas', component: ConsultaListComponent},
  { path: 'consultas/add', component: CreateConsultaComponent},
  { path: 'consultas/update/:id', component: UpdateConsultaComponent},
  { path: 'consultas/details/:id', component: DetailsConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
