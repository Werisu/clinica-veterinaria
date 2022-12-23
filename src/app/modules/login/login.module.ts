import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserService } from 'src/app/core/services/user.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [UserService, DecimalPipe]
})
export class LoginModule { }
