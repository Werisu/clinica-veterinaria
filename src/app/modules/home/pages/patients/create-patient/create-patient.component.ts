import { Fade } from './../../../../../core/animation/animations/fade.animation';
import { PatientService } from './../../../../../core/services/patient.service';
import { Owner, Owners } from './../../../../../core/interfaces/owner';
import { OwnersService } from 'src/app/core/services/owners.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  map,
} from 'rxjs';
import { Patient } from 'src/app/core/interfaces/patient';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewRegistrationComponent } from '../../users/new-registration/new-registration.component';
import { SlideInOutAnimation } from 'src/app/core/animation';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css'],
  animations: [
    SlideInOutAnimation,
    Fade
  ]
})
export class CreatePatientComponent {
  public formulario!: FormGroup;
  public myControl: any;

  public formatter!: (x: { nome: string; cpf: string }) => string;
  public formatterObje = (result: Owner) => result;

  public search!: OperatorFunction<string, readonly Owner[]>;

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnersService,
    private patientService: PatientService,
    private dialogRef: MatDialogRef<NewRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
      proprietario: ['', Validators.required],
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
      if (x) {
        return x.nome;
      }
      return '';
    };
  }

  post() {
    let patient = this.formulario.getRawValue() as Patient;
    this.patientService.post(patient).subscribe({
      next: (patient) => {
        this.dialogRef.close(true);
      },
    });
  }

  public onNoClick() {
    this.dialogRef.close(false);
  }

  showMe(){
    console.log(this.formulario.get('proprietario'));
  }
}
