import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../core/models/cliente';
import { ClienteService } from '../core/services/cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.scss']
})
export class CreateClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {

  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }

  save() {
    this.clienteService
    .createCliente(this.cliente).subscribe(data => {
      console.log(data)
      this.cliente = new Cliente();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}
