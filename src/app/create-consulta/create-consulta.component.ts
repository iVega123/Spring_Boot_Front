import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../core/models/cliente';
import { Consulta } from '../core/models/consulta';
import { Medico } from '../core/models/medico';
import { ClienteService } from '../core/services/cliente.service';
import { ConsultasService } from '../core/services/consulta.service';
import { MedicoService } from '../core/services/medico.service';

@Component({
  selector: 'app-create-consulta',
  templateUrl: './create-consulta.component.html',
  styleUrls: ['./create-consulta.component.scss']
})

export class CreateConsultaComponent implements OnInit {
  consulta: Consulta = new Consulta();
  clientes: Observable<Cliente[]>;
  medicos: Observable<Medico[]>;
  numberDate: number;
  date: Date;
  submitted = false;

  constructor(private consultaService: ConsultasService, private clienteService: ClienteService, private medicoService: MedicoService,
    private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
      this.reloadData();
    }

    reloadData() {
      this.clientes = this.clienteService.getClienteList();
      this.medicos = this.medicoService.getMedicosList();
    }

  newConsulta(): void {
    this.submitted = false;
    this.consulta = new Consulta();
  }

  save() {
    this.consultaService
    .createConsulta(this.consulta).subscribe(data => {
      console.log(data);
      this.consulta = new Consulta();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  setAttCliente(id: any): void {
    console.log(id);
    this.consulta.cliente_id = id;
    // Match the selected ID with the ID's in array
  }
  setAttMedico(id: any): void {
    console.log(id);
    this.consulta.medico_id = id;
    // Match the selected ID with the ID's in array
  }
  setAttStatus(id: any): void {
    console.log(id);
    this.consulta.status = id;
    // Match the selected ID with the ID's in array
  }
  setAttDate(id: any): void{
    console.log(id);
    this.consulta.diaMarcado = id;
  }
  gotoList() {
    this.router.navigate(['/consultas']);
  }
}
