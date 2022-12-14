import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'inicio', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'usuarios', loadChildren: () => import('./pages/users/user-registration.module').then((m) => m.UserRegistrationModule) },
    { path: 'proprietarios', loadChildren: () => import('./pages/owners/owners.module').then((m) => m.OwnersModule) },
    { path: 'pacientes', loadChildren: () => import('./pages/patients/patient-record.module').then((m) => m.PatientRecordModule) },
    { path: 'cpa', loadChildren: () => import('./pages/cpa-clinical-record/cpa-clinical-record.module').then((m) => m.CpaClinicalRecordModule) },
    { path: '', redirectTo: '/painel/inicio', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
