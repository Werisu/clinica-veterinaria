import { Owners } from './../../../../../core/interfaces/owner';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import * as moment from 'moment';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-owners-table',
  templateUrl: './owners-table.component.html',
  styleUrls: ['./owners-table.component.css']
})
export class OwnersTableComponent {
  @Input() owners!: Owners;

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
