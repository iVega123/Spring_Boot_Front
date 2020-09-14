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

@NgModule({
  declarations: [
    AppComponent,
    CreateMedicoComponent,
    MedicoDetailsComponent,
    MedicoListComponent,
    UpdateMedicoComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
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
