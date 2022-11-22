import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public cards = [
    { static: true, icon: 'pets', title: 'Paciente', info: null },
    { static: true, icon: 'monitor_heart', title: 'Ficha Clinica CPA', info: null },
    { static: true, icon: 'person_add', title: 'Cadastro de usuários', info: null },
    { static: false, icon: null, title: 'Total de pacientes cadastrados', info: '32' },
  ];

  constructor() {}

  /**
   * materialIcons
   */
  public materialIcons(isStatic: boolean): string {
    if(isStatic){
      return 'material-icons'
    }
    return 'info-dinamic'
  }
}
