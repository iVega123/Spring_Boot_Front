import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from '../core/models/consulta';
import { ConsultasService } from '../core/services/consulta.service';

@Component({
  selector: 'app-details-consulta',
  templateUrl: './details-consulta.component.html',
  styleUrls: ['./details-consulta.component.scss']
})
export class DetailsConsultaComponent implements OnInit {

  id: number;
  consulta: Consulta;

  constructor(private route: ActivatedRoute,private router: Router,
    private consultaService: ConsultasService) { }

  ngOnInit() {
    this.consulta = new Consulta();

    this.id = this.route.snapshot.params['id'];

    this.consultaService.getConsulta(this.id)
      .subscribe(data => {
        console.log(data)
        this.consulta = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['consultas']);
  }
}
