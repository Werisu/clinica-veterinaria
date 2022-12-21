import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';

@Component({
  selector: 'app-create-owners',
  templateUrl: './create-owners.component.html',
  styleUrls: ['./create-owners.component.css']
})
export class CreateOwnersComponent {
  public formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<CreateOwnersComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, CpfCnpjValidator.validate]],
      email: [''],
      telephone: ['', Validators.required]
    });
  }

  public onNoClick(){
    this.dialogRef.close(false);
  }
}
