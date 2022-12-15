import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, CpfCnpjValidator.validate]],
      email: ['', [Validators.required, Validators.email]],
      funcao: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    })
  }

  showMe(){
    console.log(this.formulario.get('email')?.errors);

  }
}
