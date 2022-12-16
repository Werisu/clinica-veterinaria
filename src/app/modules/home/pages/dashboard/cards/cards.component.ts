import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public cards = [
    { static: true, icon: 'pets', title: 'Pacientes', info: null, label: "cadastro-de-pacientes" },
    { static: true, icon: 'monitor_heart', title: 'Fichas Clinicas CPA\'s', info: null, label: "ficha-clinica-cpa" },
    { static: true, icon: 'person_add', title: 'Usuários', info: '32', label: "cadastro-de-usuarios" },
    // { static: false, icon: null, title: 'Total de pacientes cadastrados', info: '32', label: "total-de-pacientes-cadastrados" },
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
