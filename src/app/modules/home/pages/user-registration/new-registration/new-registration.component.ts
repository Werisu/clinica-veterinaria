import { User } from './../../../../../core/interfaces/user';
import { UserService } from './../../../../../core/services/user.service';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CpfCnpjValidator } from 'src/app/core/helpers/cpf-cnpj-validator';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {
  @Output() edited = EventEmitter<boolean>;

  public formulario!: FormGroup;
  public user!: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private dialogRef: MatDialogRef<NewRegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, CpfCnpjValidator.validate]],
      email: ['', [Validators.required, Validators.email]],
      funcao: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', [Validators.required, matchValidator('senha')]]
    });
  }

  public post(){
    this.user = this.formulario.getRawValue() as User;
    this.userService.post(this.user).subscribe({
      next: user => {
        this.dialogRef.close(true);
      }
    });
  }

  public onNoClick(){
    this.dialogRef.close(false);
  }
}

export function matchValidator(
  matchTo: string,
  reverse?: boolean
): ValidatorFn {
  return (control: AbstractControl):
  ValidationErrors | null => {
    if (control.parent && reverse) {
      const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!control.parent &&
      !!control.parent.value &&
      control.value ===
      (control.parent?.controls as any)[matchTo].value
      ? null
      : { matching: true };
  };
}
