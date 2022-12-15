import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewRegistrationComponent, {width: '50vw'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
