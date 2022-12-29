import { ViewCpaComponent } from './view-cpa/view-cpa.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CpaClinicalRecordRoutingModule } from './cpa-clinical-record-routing.module';
import { CpaClinicalRecordComponent } from './cpa-clinical-record.component';
import { CpaTableComponent } from './cpa-table/cpa-table.component';
import { CreateCpaComponent } from './create-cpa/create-cpa.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    CpaClinicalRecordComponent,
    CpaTableComponent,
    CreateCpaComponent,
    ViewCpaComponent
  ],
  imports: [
    CommonModule,
    CpaClinicalRecordRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatTabsModule
  ],
  exports: [
    CpaClinicalRecordComponent
  ]
})
export class CpaClinicalRecordModule { }
