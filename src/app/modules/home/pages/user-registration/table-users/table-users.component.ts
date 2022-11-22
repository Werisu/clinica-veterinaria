import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent {
  public pacientes = [
    {
      nome: 'Jane Cooper',
      dataNasc: new Date('2000-01-30'),
      cpf: '000.000.***-00',
      funcao: 'Médico'
    },
    {
      nome: 'Guy Hawkins',
      dataNasc: new Date('2000-01-30'),
      cpf: '000.000.***-00',
      funcao: 'Auxiliar'
    },
    {
      nome: 'Brooklyn Simmons',
      dataNasc: new Date('2000-01-30'),
      cpf: '000.000.***-00',
      funcao: 'Médico'
    },
    {
      nome: 'Jacob Jones',
      dataNasc: new Date('2000-01-30'),
      cpf: '000.000.***-00',
      funcao: 'Médico'
    }
  ];

  public moment = moment;
}
