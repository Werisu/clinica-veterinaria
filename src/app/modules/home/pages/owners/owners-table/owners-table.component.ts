import { EditOwnersComponent } from './../edit-owners/edit-owners.component';
import { Owner, Owners } from './../../../../../core/interfaces/owner';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import * as moment from 'moment';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { OwnersService } from 'src/app/core/services/owners.service';
import { CreateOwnersComponent } from '../create-owners/create-owners.component';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-owners-table',
  templateUrl: './owners-table.component.html',
  styleUrls: ['./owners-table.component.css']
})
export class OwnersTableComponent {
  public owner!: Owner;
  public formulario!: FormGroup;
  public owners: Owners = [];

  public moment = moment;

  public isBreak = false;

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, public dialog: MatDialog, private ownersService: OwnersService){}

  ngOnInit(): void {
    this.getOwners();
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 500px)']).subscribe((res) => {
      if (res.matches) {
        this.isBreak = true;
      } else {
        this.isBreak = false;
      }
    });

    this.cdr.detectChanges();
  }

  openDialog(mode: 'edit' | 'create', owner?: Owner) {
    if (mode == 'create') {
      const dialogRef = this.dialog.open(CreateOwnersComponent, {
        width: '50vw',
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);

        if (result == true) {
          this.getOwners();
        }
      });
    } else {
      const dialogRef = this.dialog.open(EditOwnersComponent, {
        width: '50vw',
        data: owner,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(`Dialog result: ${result}`);

        if (result == true) {
          this.getOwners();
        }
      });
    }
  }

  public getOwners(){
    this.ownersService.getAll().subscribe({
      next: owners => {
        this.owners = owners;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  public deleteOwner(owner: Owner) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Tem certeza?',
      html: `Quer deletar o proprietário <strong>${owner.nome}</strong>? Você não será capaz de reverter isso!`,
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
        this.ownersService.delete(owner.id ?? -1).subscribe({
          next: () => {
            swalWithBootstrapButtons.fire({
              title: 'Deletado!',
              html: `O proprietário <strong>${owner.nome}</strong>`,
              icon: 'success'
          });

            this.getOwners();
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
          html: `O proprietário <strong>${owner.nome}</strong> está seguro :)`,
          icon: 'error'
      });
      }
    });
  }
}
