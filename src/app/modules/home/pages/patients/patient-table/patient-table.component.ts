import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit, AfterViewInit {
  @Input() inputHTML: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.nextPageLabel = 'Próximo';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.firstPageLabel = 'Primeira página'
    this.paginator._intl.lastPageLabel = 'Última página'
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource(this.pacientes);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
