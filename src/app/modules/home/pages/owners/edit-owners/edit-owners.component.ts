import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';
import { Owner } from 'src/app/core/interfaces/owner';
import { OwnersService } from 'src/app/core/services/owners.service';

@Component({
  selector: 'app-edit-owners',
  templateUrl: './edit-owners.component.html',
  styleUrls: ['./edit-owners.component.css']
})
export class EditOwnersComponent implements OnInit {
  public formulario!: FormGroup;
  public owner!: Owner;

  constructor(private formBuilder: FormBuilder, private ownerService: OwnersService, private dialogRef: MatDialogRef<EditOwnersComponent>, @Inject(MAT_DIALOG_DATA) public data: Owner){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.data.id],
      nome: [this.data.nome, Validators.required],
      cpf: [this.data.cpf, [Validators.required, CpfCnpjValidator.validate]],
      email: [this.data.email],
      telephone: [this.data.telephone, Validators.required],
    });
  }

  public onNoClick(){
    this.dialogRef.close(false);
  }

  public put(){
    this.owner = this.formulario.getRawValue() as Owner;
    this.ownerService.put(this.owner).subscribe({
      next: owner => {
        this.dialogRef.close(true);
      }
    });
  }
}
