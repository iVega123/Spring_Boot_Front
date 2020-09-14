import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from '../core/models/consulta';
import { ConsultasService } from '../core/services/consulta.service';

@Component({
  selector: 'app-update-consulta',
  templateUrl: './update-consulta.component.html',
  styleUrls: ['./update-consulta.component.scss']
})
export class UpdateConsultaComponent implements OnInit {
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
        this.consultaService = data;
      }, error => console.log(error));
  }

  updateMedico() {
    this.consultaService.updateConsulta(this.id, this.consulta)
      .subscribe(data => {
        console.log(data);
        this.consulta = new Consulta();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMedico();
  }

  gotoList() {
    this.router.navigate(['/consultas']);
  }
}
