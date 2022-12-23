import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperatorFunction, Observable, debounceTime, map } from 'rxjs';
import { Owner } from 'src/app/core/interfaces/owner';
import { Patient } from 'src/app/core/interfaces/patient';
import { OwnersService } from 'src/app/core/services/owners.service';
import { PatientService } from 'src/app/core/services/patient.service';
import { NewRegistrationComponent } from '../../users/new-registration/new-registration.component';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {
  public formulario!: FormGroup;

  public formatter!: (x: { nome: string; cpf: string }) => string;
  public formatterObje = (result: Owner) => result;

  public search!: OperatorFunction<string, readonly Owner[]>;

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnersService,
    private patientService: PatientService,
    private dialogRef: MatDialogRef<NewRegistrationComponent>, @Inject(MAT_DIALOG_DATA) public data: Patient
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.data.id],
      nome: [this.data.nome, Validators.required],
      especie: [this.data.especie, Validators.required],
      fc: [this.data.fc, Validators.required],
      idade: [this.data.idade, Validators.required],
      sexo: [this.data.sexo, Validators.required],
      raca: [this.data.raca, Validators.required],
      cor: [this.data.cor, Validators.required],
      peso: [this.data.peso, Validators.required],
      proprietario: [this.data.proprietario, Validators.required],
    });
    this.getOwner();
  }

  public getOwner() {
    this.ownerService.getAll().subscribe({
      next: (owners) => {
        this.search = (text$: Observable<string>) =>
          text$.pipe(
            debounceTime(200),
            map((term) =>
              term === ''
                ? []
                : owners
                    .filter(
                      (v) =>
                        v.cpf.indexOf(term.toLowerCase()) > -1 ||
                        v.nome.toLowerCase().indexOf(term.toLowerCase()) > -1
                    )
                    .slice(0, 10)
            )
          );
      },
    });

    this.formatter = (x: { nome: string; cpf: string }) => {
      if(x){
        return x.nome
      }
      return '';
    };
  }

  put() {
    let patient = this.formulario.getRawValue() as Patient;
    this.patientService.put(patient).subscribe({
      next: patient => {
        this.dialogRef.close(true);
      }
    });
  }

  public onNoClick(){
    this.dialogRef.close(false);
  }
}
