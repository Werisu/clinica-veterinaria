import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav!: MatSidenav;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logout(){
    this.router.navigate(['/']);
  }

}
