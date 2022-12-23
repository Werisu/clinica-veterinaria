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

  constructor() { }

  ngOnInit(): void {

  }
}
