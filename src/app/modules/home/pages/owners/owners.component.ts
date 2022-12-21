import { OwnersService } from './../../../../core/services/owners.service';
import { CreateOwnersComponent } from './create-owners/create-owners.component';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Owner, Owners } from 'src/app/core/interfaces/owner';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent {
  public owner!: Owner;
  public formulario!: FormGroup;
  public owners: Owners = [];

  constructor(public dialog: MatDialog, private ownersService: OwnersService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateOwnersComponent, {
      width: '50vw',
      data: this.formulario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if(typeof(result) == 'object'){
        this.owner = result.getRawValue() as Owner;
        this.ownersService.Post(this.owner).subscribe();

        this.getOwners();
      }
    });
  }

  public getOwners(){
    this.ownersService.GetAll().subscribe({
      next: owners => {
        this.owners = owners;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
