import { MatDividerModule } from '@angular/material/divider';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientTableComponent } from './patient-table/patient-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRecordRoutingModule } from './patient-record-routing.module';
import { PatientRecordComponent } from './patient-record.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    PatientRecordComponent,
    PatientTableComponent,
    CreatePatientComponent,
    EditPatientComponent
  ],
  imports: [
    CommonModule,
    PatientRecordRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    NgbTypeaheadModule
  ]
})
export class PatientRecordModule { }
