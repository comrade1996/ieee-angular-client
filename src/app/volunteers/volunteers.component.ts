import { RequestsService } from './../requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styles: []
})
export class VolunteersComponent implements OnInit {
  data: Object;

  constructor(private service: RequestsService) { }

  ngOnInit() {
    this.service.getData('volunteers')
    .subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

}
