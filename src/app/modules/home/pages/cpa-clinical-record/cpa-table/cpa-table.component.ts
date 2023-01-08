import { CreateCpaComponent } from './../create-cpa/create-cpa.component';
import { CpaService } from './../../../../../core/services/cpa.service';
import { ChangeDetectorRef, Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Cpa, Cpas, AnamneseGeral } from 'src/app/core/interfaces/cpa-clinical-record-interfaces/cpa-table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cpa-table',
  templateUrl: './cpa-table.component.html',
  styleUrls: ['./cpa-table.component.css']
})
export class CpaTableComponent implements OnInit {
  @Input() inputHTML: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public cpa: AnamneseGeral[] = [];

  public moment = moment;

  public displayedColumns: string[] = ['id', 'nome', 'especie', 'sexo', 'acoes'];
  public dataSource = new MatTableDataSource(this.cpa);

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, public dialog: MatDialog, private cpaService: CpaService) { }

  ngOnInit(): void {
    this.getCpa();
  }

  openDialog(mode: 'edit' | 'create', cpaPatientOwner?: Cpa){
    if(mode === 'create'){
      const dialogRef = this.dialog.open(CreateCpaComponent, {
        width: '80vw',
        position: {
          top: '10vh'
        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);
        this.getCpa();
      })
    }
  }

  public getCpa(){
    this.cpaService.getAnamnseGeral().subscribe({
      next: cpaTable => {
        this.cpa = cpaTable;
        this.dataSource.data = cpaTable;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  public deleteAnamnseGeral(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Tem certeza?',
      text: "Você quer deletar essa ficha clínica?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      customClass: {
        actions: 'gap-2',
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-secondary'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.cpaService.deleteAnamnseGeral(id).subscribe({
          next: res => {
            swalWithBootstrapButtons.fire(
              'Excluído!',
              'A ficha clínica foi excluída.',
              'success'
            );

            this.getCpa();
          }
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelada',
          'A ficha clínica está salva :)',
          'error'
        )
      }
    });
  }
}
