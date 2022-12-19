import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Users } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements AfterViewInit {
  @Input() users!: Users;

  // public users = [
  //   {
  //     nome: 'Jane Cooper',
  //     dataNasc: new Date('2000-01-30'),
  //     cpf: '000.000.***-00',
  //     funcao: 'Médico'
  //   },
  //   {
  //     nome: 'Guy Hawkins',
  //     dataNasc: new Date('2000-01-30'),
  //     cpf: '000.000.***-00',
  //     funcao: 'Auxiliar'
  //   },
  //   {
  //     nome: 'Brooklyn Simmons',
  //     dataNasc: new Date('2000-01-30'),
  //     cpf: '000.000.***-00',
  //     funcao: 'Médico'
  //   },
  //   {
  //     nome: 'Jacob Jones',
  //     dataNasc: new Date('2000-01-30'),
  //     cpf: '000.000.***-00',
  //     funcao: 'Médico'
  //   }
  // ];

  public moment = moment;

  public isBreak = false;

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef){}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 500px)']).subscribe((res) => {
      if (res.matches) {
        this.isBreak = true;
      } else {
        this.isBreak = false;
      }
    });

    this.cdr.detectChanges();
  }


}
