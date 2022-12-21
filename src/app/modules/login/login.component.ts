import { Router } from '@angular/router';
import { UserService } from './../../core/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario = '';
  public senha = '';

  constructor(private userService: UserService, private router: Router){}

  public signUp(){
    document.querySelector(".container-auxfortech")?.classList.add("sign-up-mode");
  }

  public signIn(){
    document.querySelector(".container-auxfortech")?.classList.remove("sign-up-mode");
  }

  public login(){
    this.userService.GetAll().subscribe((res) => {
      res.forEach(key => {
        if(key.nome == this.usuario && key.senha == this.senha){
          this.router.navigate(['painel/inicio']);
        }
      });
    })
  }
}
