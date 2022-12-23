import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EditUserComponent } from './edit-user/edit-user.component'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    UserRegistrationComponent,
    TableUsersComponent,
    NewRegistrationComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    UserRegistrationComponent
  ]
})
export class UserRegistrationModule { }
