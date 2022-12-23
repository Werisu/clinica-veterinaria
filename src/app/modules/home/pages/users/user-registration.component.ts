import { TableUsersComponent } from './table-users/table-users.component';
import { FormControl, FormGroup } from '@angular/forms';
import { User, Users } from './../../../../core/interfaces/user';
import { UserService } from './../../../../core/services/user.service';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild(TableUsersComponent) table!: TableUsersComponent;

  public searchInput = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
}
