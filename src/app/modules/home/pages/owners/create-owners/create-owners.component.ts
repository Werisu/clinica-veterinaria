import { OwnersService } from 'src/app/core/services/owners.service';
import { Owner } from './../../../../../core/interfaces/owner';
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
  public owner!: Owner;

  constructor(private formBuilder: FormBuilder, private ownerService: OwnersService, private dialogRef: MatDialogRef<CreateOwnersComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

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

  public post(){
    this.owner = this.formulario.getRawValue() as Owner;
    this.ownerService.post(this.owner).subscribe({
      next: owner => {
        this.dialogRef.close(true);
      }
    });
  }
}
