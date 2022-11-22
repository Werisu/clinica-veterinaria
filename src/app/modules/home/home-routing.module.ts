import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'inicio', loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: '', redirectTo: '/painel/inicio', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
