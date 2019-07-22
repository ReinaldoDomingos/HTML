import {Component, OnInit} from '@angular/core';
import {ConsultaDataService} from '../consulta-data.service';
import {Consulta} from '../consulta';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [ConsultaDataService]
})

export class TodosComponent implements OnInit {
  consultas: Consulta[] = [];

  constructor(
    private consultaDataService: ConsultaDataService,
    private route: ActivatedRoute
    ) {
  }

  public ngOnInit() {
    this.route.data
    .map((data) => data['consultas'])
    .subscribe(
      (consultas) => {
        this.consultas = consultas;
      }
      );
  }

  onAddConsulta(consulta) {
    this.consultaDataService
    .addConsulta(consulta)
    .subscribe(
      (newConsulta) => {
        this.consultas = this.consultas.concat(newConsulta);
      }
      );
  }

  onToggleConsultaComplete(consulta) {
    this.consultaDataService
    .toggleConsultaComplete(consulta)
    .subscribe(
      (updatedConsulta) => {
        consulta = updatedConsulta;
      }
      );
  }

  onRemoveConsulta(consulta) {
    console.log(consulta.id)    
    this.consultaDataService
    .deleteConsultaById(consulta.id)
    .subscribe(
      ( ) => {
        this.consultas = this.consultas.filter((t) => t.id !== consulta.id);
      }
      );
  }
}
