import { FormGroup } from '@angular/forms';
import { User, Users } from './../../../../core/interfaces/user';
import { UserService } from './../../../../core/services/user.service';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public user!: User;
  public formulario!: FormGroup;
  public users: Users = [];

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewRegistrationComponent, {
      width: '50vw',
      data: this.formulario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if(typeof(result) == 'object'){
        this.user = result.getRawValue() as User;
        this.userService.Post(this.user).subscribe();

        this.getUsers();
      }
    });
  }

  public getUsers(){
    this.userService.GetAll().subscribe({
      next: users => {
        this.users = users;
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
