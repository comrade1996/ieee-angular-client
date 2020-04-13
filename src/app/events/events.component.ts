import { RequestsService } from './../requests.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: []
})
export class EventsComponent implements OnInit {
  data: Object;

  constructor(private service: RequestsService) { }

  ngOnInit() {
    this.service.getData('events')
    .subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

}
