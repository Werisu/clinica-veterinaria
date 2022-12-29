import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CpaService } from 'src/app/core/services/cpa.service';

@Component({
  selector: 'app-view-cpa',
  templateUrl: './view-cpa.component.html',
  styleUrls: ['./view-cpa.component.css'],
})
export class ViewCpaComponent implements OnInit {
  public formularioAnamneseGeral!: FormGroup;

  public id: number = 0;

  constructor(
    private _formBuilder: FormBuilder,
    private cpaService: CpaService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.params['id'];

    this.formularioAnamneseGeral = this._formBuilder.group({
      queixaPrincipal: ['', Validators.required],
      historicoDoencaAtual: ['', Validators.required],
      antecedentesMorbidos: ['', Validators.required],
      CondicaoDeVida: ['', Validators.required],
      saudeConvivio: ['', Validators.required],
      paciente: ['', Validators.required],
    });
    this.getAnamneseGeral();
  }

  getAnamneseGeral() {
    this.cpaService.getAnamnseGeralById(this.id).subscribe({
      next: (anamnseGeral) => {
        this.formularioAnamneseGeral = this._formBuilder.group({
          queixaPrincipal: [anamnseGeral.queixaPrincipal, Validators.required],
          historicoDoencaAtual: [
            anamnseGeral.historicoDoencaAtual,
            Validators.required,
          ],
          antecedentesMorbidos: [
            anamnseGeral.antecedentesMorbidos,
            Validators.required,
          ],
          CondicaoDeVida: [anamnseGeral.CondicaoDeVida, Validators.required],
          saudeConvivio: [anamnseGeral.saudeConvivio, Validators.required],
          paciente: [anamnseGeral.paciente, Validators.required],
        });
      },
    });
  }
}
