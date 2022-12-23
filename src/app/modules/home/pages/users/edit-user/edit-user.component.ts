import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interfaces/user';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  public formulario!: FormGroup;
  public user!: User;

  constructor(private formBuilder: FormBuilder,private userService: UserService, private dialogRef: MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: User){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      nome: [this.data.nome, Validators.required],
      cpf: [this.data.cpf, [Validators.required, CpfCnpjValidator.validate]],
      email: [this.data.email, [Validators.required, Validators.email]],
      funcao: [this.data.funcao, Validators.required]
    });
  }

  public onNoClick(){
    this.dialogRef.close(false);
  }

  public put(){
    this.user = this.formulario.getRawValue() as User;
    this.userService.put(this.user).subscribe({
      next: user => {
        this.dialogRef.close(true);
      },
      error: err => console.log
    });
  }
}
