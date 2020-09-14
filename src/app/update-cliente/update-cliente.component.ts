import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../core/models/cliente';
import { ClienteService } from '../core/services/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.scss']
})
export class UpdateClienteComponent implements OnInit {

  id: number;
  cliente: Cliente;

  constructor(private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();

    this.id = this.route.snapshot.params['id'];

    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.clienteService = data;
      }, error => console.log(error));
  }

  updateMedico() {
    this.clienteService.updateCliente(this.id, this.cliente)
      .subscribe(data => {
        console.log(data);
        this.cliente = new Cliente();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMedico();
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}

