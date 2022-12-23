import { Patient, Patients } from './../../../../../core/interfaces/patient';
import { PatientService } from './../../../../../core/services/patient.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CreatePatientComponent } from './../create-patient/create-patient.component';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit, AfterViewInit {
  @Input() inputHTML: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public pacientes: Patients = [];

  public moment = moment;

  public displayedColumns: string[] = ['id', 'nome', 'especie', 'sexo', 'acoes'];
  public dataSource = new MatTableDataSource(this.pacientes);

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, public dialog: MatDialog, private patientService: PatientService) { }

  ngOnInit() {
    this.getPatient();
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
    this.paginator._intl.nextPageLabel = 'Próximo';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.firstPageLabel = 'Primeira página'
    this.paginator._intl.lastPageLabel = 'Última página'
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(mode: 'edit' | 'create', patient?: Patient) {
    if (mode == 'create') {
      const dialogRef = this.dialog.open(CreatePatientComponent, {
        width: '50vw',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);

        if (result == true) {
          this.getPatient();
        }
      });
    } else {
      // const dialogRef = this.dialog.open(EditOwnersComponent, {
      //   width: '50vw',
      //   data: owner,
      // });

      // dialogRef.afterClosed().subscribe((result) => {
      //   console.log(`Dialog result: ${result}`);

      //   if (result == true) {
      //     this.getOwners();
      //   }
      // });
    }
  }

  public getPatient(){
    this.patientService.getAll().subscribe({
      next: owners => {
        this.pacientes = owners;
        this.dataSource.data = owners;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  public deleteOwner(patient: Patient) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Tem certeza?',
      html: `Quer deletar o proprietário <strong>${patient.nome}</strong>? Você não será capaz de reverter isso!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimar',
      cancelButtonText: 'Cancelar',
      customClass: {
        actions: 'gap-2',
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-secondary'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.patientService.delete(patient.id ?? -1).subscribe({
          next: () => {
            swalWithBootstrapButtons.fire({
              title: 'Deletado!',
              html: `O proprietário <strong>${patient.nome}</strong>`,
              icon: 'success'
          });

            this.getPatient();
          },
          error: (err) => {
            alert('error');
          },
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: 'Cancelado',
          html: `O proprietário <strong>${patient.nome}</strong> está seguro :)`,
          icon: 'error'
      });
      }
    });
  }

}
