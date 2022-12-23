import { UserService } from './../../../../core/services/user.service';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from '../../../../core/directives/sortable.directive';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

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
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    DecimalPipe,
    NgxMaskModule.forRoot(maskConfig),
    NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    UserRegistrationComponent
  ],
  providers: [UserService, DecimalPipe]
})
export class UserRegistrationModule { }
