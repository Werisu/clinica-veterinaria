import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Users } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements AfterViewInit {
  @Input() users!: Users;

  public moment = moment;

  public isBreak = false;

  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef){}

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 500px)']).subscribe((res) => {
      if (res.matches) {
        this.isBreak = true;
      } else {
        this.isBreak = false;
      }
    });

    this.cdr.detectChanges();
  }


}
