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

/* TABELA DE PACIENTES */
export interface PeriodicElement {
  id: number;
  name: string;
  idade: string;
  especie: string;
}
/* FIM DA TABELA DE PACIENTES */

@Component({
  selector: 'app-create-cpa',
  templateUrl: './create-cpa.component.html',
  styleUrls: ['./create-cpa.component.css']
})
export class CreateCpaComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('paginatorSelectPatient') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selecaoPaciente = this._formBuilder.group({
    saerch: ['', Validators.required],
  });
  FormularioAnamneseGeral!: FormGroup;
  isLinear = true;

  // TABELA DE PACIENTES
  displayedColumns: string[] = ['id', 'nome', 'idade', 'especie', 'sexo', 'proprietario'];
  patients: Patients = [];
  dataSource!: MatTableDataSource<Patient>;
  patient!: Patient;
  owner!: Owner;

  constructor(private _formBuilder: FormBuilder, private patientsService: PatientService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getPatients();
    this.FormularioAnamneseGeral = this._formBuilder.group({
      queixaPrincipal: ['', Validators.required],
      historicoDoencaAtual: ['', Validators.required],
      antecedentesMorbidos: ['', Validators.required],
      CondicaoDeVida: ['', Validators.required],
      saudeConvivio: ['', Validators.required],
      paciente: ['', Validators.required],
    });
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
    this.FormularioAnamneseGeral.get('paciente')?.setValue(this.patient);
  }

  back(){
    this.stepper.previous();
  }
}
