import { FormControl, FormGroup } from '@angular/forms';
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

  public searchInput = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
}
