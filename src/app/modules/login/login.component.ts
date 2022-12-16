import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public signUp(){
    document.querySelector(".container-auxfortech")?.classList.add("sign-up-mode");
  }

  public signIn(){
    document.querySelector(".container-auxfortech")?.classList.remove("sign-up-mode");
  }
}
