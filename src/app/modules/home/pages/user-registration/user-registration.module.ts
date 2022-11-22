import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { TableUsersComponent } from './table-users/table-users.component';


@NgModule({
  declarations: [
    UserRegistrationComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule
  ],
  exports: [
    UserRegistrationComponent
  ]
})
export class UserRegistrationModule { }
