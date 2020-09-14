import { Medico } from '../medico';
import { Component, OnInit, Input } from '@angular/core';
import { MedicoService } from '../medico.service';
import { MedicoListComponent } from '../medico-list/medico-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-medico',
  templateUrl: './details-medico.component.html',
  styleUrls: ['./details-medico.component.scss']
})
export class MedicoDetailsComponent implements OnInit {

  id: number;
  medico: Medico;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: MedicoService) { }

  ngOnInit() {
    this.medico = new Medico();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getMedico(this.id)
      .subscribe(data => {
        console.log(data)
        this.medico = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['medicos']);
  }
}