import { Component, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  events = [];
  week;

  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.calendarService.getSemaine(1).subscribe(week => {
      console.log('week', week);
      this.week = week;
    }), error => {
      console.warn('error', error);
    }
  }

}
