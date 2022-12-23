import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { OwnersComponent } from './owners.component';
import { OwnersTableComponent } from './owners-table/owners-table.component';
import { CreateOwnersComponent } from './create-owners/create-owners.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { EditOwnersComponent } from './edit-owners/edit-owners.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    OwnersComponent,
    OwnersTableComponent,
    CreateOwnersComponent,
    EditOwnersComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig)
  ]
})
export class OwnersModule { }
