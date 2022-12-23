import { Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {
  @Input() inputHTML: any;

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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource(this.pacientes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
