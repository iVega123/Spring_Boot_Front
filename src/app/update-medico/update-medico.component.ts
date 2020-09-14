import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-update-medico',
  templateUrl: './update-medico.component.html',
  styleUrls: ['./update-medico.component.scss']
})
export class UpdateMedicoComponent implements OnInit {

  id: number;
  medico: Medico;

  constructor(private route: ActivatedRoute,private router: Router,
    private medicoService: MedicoService) { }

  ngOnInit() {
    this.medico = new Medico();

    this.id = this.route.snapshot.params['id'];

    this.medicoService.getMedico(this.id)
      .subscribe(data => {
        console.log(data)
        this.medicoService = data;
      }, error => console.log(error));
  }

  updateMedico() {
    this.medicoService.updateMedico(this.id, this.medico)
      .subscribe(data => {
        console.log(data);
        this.medico = new Medico();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMedico();
  }

  gotoList() {
    this.router.navigate(['/update']);
  }
}
