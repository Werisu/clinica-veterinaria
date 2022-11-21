import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'painel',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    data: {
      breadcrumb: {
        label: 'Inicio',
        info: 'home'
      }
    }
  },
  { path: '**', redirectTo: 'painel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
