import { ViewCpaComponent } from './view-cpa/view-cpa.component';
import { CpaClinicalRecordComponent } from './cpa-clinical-record.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CpaClinicalRecordComponent },
  { path: ':id', component: ViewCpaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CpaClinicalRecordRoutingModule { }
