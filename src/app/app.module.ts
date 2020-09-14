import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { MedicoDetailsComponent } from './details-medico/details-medico.component';
import { MedicoListComponent } from './medico-list/medico-list.component';
import { UpdateMedicoComponent } from './update-medico/update-medico.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthHeaderInterceptor} from "./core/interceptors/auth.header.interceptor";
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { CreateConsultaComponent } from './create-consulta/create-consulta.component';
import { DetailsConsultaComponent } from './details-consulta/details-consulta.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { UpdateConsultaComponent } from './update-consulta/update-consulta.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    CreateMedicoComponent,
    MedicoDetailsComponent,
    MedicoListComponent,
    UpdateMedicoComponent,
    LoginComponent,
    CallbackComponent,
    CreateClienteComponent,
    DetailsClienteComponent,
    ClienteListComponent,
    UpdateClienteComponent,
    CreateConsultaComponent,
    DetailsConsultaComponent,
    ConsultaListComponent,
    UpdateConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:  AuthHeaderInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
