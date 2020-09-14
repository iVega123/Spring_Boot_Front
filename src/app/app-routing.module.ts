import { MedicoDetailsComponent } from './details-medico/details-medico.component';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { UpdateMedicoComponent } from './update-medico/update-medico.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: '', redirectTo: 'medicos', pathMatch: 'full' },
  { path:'Login', component: LoginComponent},
  { path: 'medicos', component: MedicoListComponent},
  { path: 'add', component: CreateMedicoComponent },
  { path: 'callback', component: CallbackComponent},
  { path: 'update/:id', component: UpdateMedicoComponent },
  { path: 'details/:id', component: MedicoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
