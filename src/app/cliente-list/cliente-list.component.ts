import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../core/models/cliente';
import { ClienteService } from '../core/services/cliente.service';
import { SecurityService } from '../core/services/security.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService,
    private router: Router, private http: HttpClient, private securityService: SecurityService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clienteService.getClienteList();
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clienteDetails(id: number){
    this.router.navigate(['clientes/details', id]);
  }
}
