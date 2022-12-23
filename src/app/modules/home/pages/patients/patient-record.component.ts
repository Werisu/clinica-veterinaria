import { PatientTableComponent } from './patient-table/patient-table.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent {
  @ViewChild(PatientTableComponent) table!: PatientTableComponent;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CreatePatientComponent, {width: '50vw'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
