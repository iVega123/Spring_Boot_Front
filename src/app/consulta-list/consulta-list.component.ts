import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consulta } from '../core/models/consulta';
import { ConsultasService } from '../core/services/consulta.service';
import { SecurityService } from '../core/services/security.service';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.scss']
})
export class ConsultaListComponent implements OnInit {
  consultas: Observable<Consulta[]>;

  constructor(private consultasService: ConsultasService,
    private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.consultas = this.consultasService.getConsultaList();
  }

  deleteConsulta(id: number) {
    this.consultasService.deleteConsulta(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  consultaDetails(id: number){
    this.router.navigate(['consultas/details', id]);
  }
}
