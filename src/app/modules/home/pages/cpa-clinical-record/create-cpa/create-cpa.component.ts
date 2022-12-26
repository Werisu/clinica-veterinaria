import { Fade } from './../../../../../core/animation/animations/fade.animation';
import { Patient } from 'src/app/core/interfaces/patient';
import { PatientService } from './../../../../../core/services/patient.service';
import { Patients } from './../../../../../core/interfaces/patient';
import { Component, ViewChild, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Owner } from 'src/app/core/interfaces/owner';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-create-cpa',
  templateUrl: './create-cpa.component.html',
  styleUrls: ['./create-cpa.component.css'],
  animations: [
    Fade
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class CreateCpaComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('paginatorSelectPatient') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  formularioAnamneseGeral!: FormGroup;
  formularioAnamneseEspecial!: FormGroup;
  formularioExameObjetivo!: FormGroup;
  isLinear = true;

  // TABELA DE PACIENTES
  displayedColumns: string[] = ['id', 'nome', 'idade', 'especie', 'sexo', 'proprietario'];
  patients: Patients = [];
  dataSource!: MatTableDataSource<Patient>;
  patient?: Patient;
  owner!: Owner;

  constructor(private _formBuilder: FormBuilder, private patientsService: PatientService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getPatients();

    this.formularioAnamneseGeral = this._formBuilder.group({
      queixaPrincipal: ['', Validators.required],
      historicoDoencaAtual: ['', Validators.required],
      antecedentesMorbidos: ['', Validators.required],
      CondicaoDeVida: ['', Validators.required],
      saudeConvivio: ['', Validators.required],
      paciente: ['', Validators.required]
    });

    this.formularioAnamneseEspecial = this._formBuilder.group({
      olhos: ['', Validators.required],
      ouvidos: ['', Validators.required],
      sr: ['', Validators.required],
      sc: ['', Validators.required],
      sd: ['', Validators.required],
      sgu: ['', Validators.required],
      sn: ['', Validators.required],
      historicoImunizacao: ['', Validators.required],
      paciente: ['', Validators.required]
    });

    this.formularioExameObjetivo = this._formBuilder.group({
      temperaturaRetal: ['', Validators.required],
      ectoscopia: ['', Validators.required],
      srNariz: ['', Validators.required],
      srTorazInspecaoFr: ['', Validators.required],
      tipoMovimento: ['', Validators.required],
      polpacao: ['', Validators.required],
      percussao: ['', Validators.required],
      aucusticaPulmonar: ['', Validators.required],
      scCoracaoFc: ['', Validators.required],
      ritmo: ['', Validators.required],
      aucusticaPalpacao: ['', Validators.required],
      pulsoArterial: ['', Validators.required],
      alteracoesVasculares: ['', Validators.required],
      shlLifonodos: ['', Validators.required],
      baco: ['', Validators.required],
      sdViasDigestoriasAnteriores: ['', Validators.required],
      abdomen: ['', Validators.required],
      estomago: ['', Validators.required],
      intestinos: ['', Validators.required],
      figado: ['', Validators.required],
      sgu: ['', Validators.required],
      sn: ['', Validators.required],
      orgaosSentidosOlhosOuvidos: ['', Validators.required],
      aparelhoLocomotor: ['', Validators.required],
      apreciacaoAchados: ['', Validators.required],
      diagProvisorio: ['', Validators.required],
      paciente: ['', Validators.required]
    })
  }

  ngAfterViewInit() {

  }

  getPatients(){
    this.patientsService.getAll().subscribe({
      next: patients => {
        this.patients = patients;
        this.dataSource = new MatTableDataSource(patients);

        this.paginator._intl.itemsPerPageLabel = 'Itens por página';
        this.paginator._intl.nextPageLabel = 'Próximo';
        this.paginator._intl.previousPageLabel = 'Anterior';
        this.paginator._intl.firstPageLabel = 'Primeira página';
        this.paginator._intl.lastPageLabel = 'Última página';
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickRow(row: Patient){
    this.isLinear = false
    this.patient = row;
    this.owner = row.proprietario;
  }

  next(){
    this.stepper.next();
    this.formularioAnamneseGeral.get('paciente')?.setValue(this.patient);
  }

  back(){
    this.stepper.previous();
  }
}
