import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { Medico } from '../medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.scss']
})
export class CreateMedicoComponent implements OnInit {

  medico: Medico = new Medico();
  submitted = false;

  constructor(private medicoService: MedicoService,
    private router: Router) { }

  ngOnInit() {
    
  }

  newMedico(): void {
    this.submitted = false;
    this.medico = new Medico();
  }

  save() {
    this.medicoService
    .createMedico(this.medico).subscribe(data => {
      console.log(data)
      this.medico = new Medico();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/medicos']);
  }
}
