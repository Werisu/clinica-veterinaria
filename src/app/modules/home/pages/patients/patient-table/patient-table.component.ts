import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  public pacientes = [
    {
      nome: 'Jane Cooper',
      idade: 5,
      especie: 'Canino',
      sexo: 'Macho'
    },
    {
      nome: 'Guy Hawkins',
      idade: 2,
      especie: 'Felino',
      sexo: 'Fêmea'
    },
    {
      nome: 'Brooklyn Simmons',
      idade: 1,
      especie: 'Canino',
      sexo: 'Fêmea'
    },
    {
      nome: 'Jacob Jones',
      idade: 3,
      especie: 'Canino',
      sexo: 'Macho'
    }
  ];

  public moment = moment;

  constructor() { }

  ngOnInit() {
  }

}
