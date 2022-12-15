import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'inicio', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'cadastro-de-usuarios', loadChildren: () => import('./pages/user-registration/user-registration.module').then((m) => m.UserRegistrationModule) },
    { path: 'cadastro-de-pacientes', loadChildren: () => import('./pages/patient-record/patient-record.module').then((m) => m.PatientRecordModule) },
    { path: '', redirectTo: '/painel/inicio', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
