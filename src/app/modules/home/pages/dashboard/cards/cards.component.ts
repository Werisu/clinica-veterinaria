import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public cards = [
    { static: true, icon: 'pets', title: 'Paciente', info: null, label: "pets" },
    { static: true, icon: 'monitor_heart', title: 'Ficha Clinica CPA', info: null, label: "ficha-clinica-cpa" },
    { static: true, icon: 'person_add', title: 'Cadastro de usuários', info: null, label: "cadastro-de-usuarios" },
    { static: false, icon: null, title: 'Total de pacientes cadastrados', info: '32', label: "total-de-pacientes-cadastrados" },
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
