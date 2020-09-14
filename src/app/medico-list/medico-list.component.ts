import { MedicoDetailsComponent } from '../details-medico/details-medico.component';
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { MedicoService } from "../core/services/medico.service";
import { Medico } from "../core/models/medico";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { SecurityService } from '../core/services/security.service';
@Component({
  selector: "app-medico-list",
  templateUrl: "./medico-list.component.html",
  styleUrls: ["./medico-list.component.scss"]
})
export class MedicoListComponent implements OnInit {
  medicos: Observable<Medico[]>;

  constructor(private medicoService: MedicoService,
    private router: Router, private http: HttpClient, private securityService: SecurityService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.medicos = this.medicoService.getMedicosList();
  }

  deleteMedico(id: number) {
    this.medicoService.deleteMedico(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  medicoDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
