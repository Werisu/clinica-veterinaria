import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {
  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      fc: ['', Validators.required],
      idade: ['', Validators.required],
      sexo: ['', Validators.required],
      raca: ['', Validators.required],
      cor: ['', Validators.required],
      peso: ['', Validators.required],
      proprietario: ['', Validators.required]
    })
  }
}
