import { User } from './../../../../../core/interfaces/user';
import { UserService } from './../../../../../core/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<NewRegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, CpfCnpjValidator.validate]],
      email: ['', [Validators.required, Validators.email]],
      funcao: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  public onNoClick(){
    this.dialogRef.close(false);
  }
}
