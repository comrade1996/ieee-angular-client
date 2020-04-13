import { RequestsService } from './../requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponser',
  templateUrl: './sponser.component.html',
  styles: []
})
export class SponserComponent implements OnInit {
  data: Object;

  constructor(private service: RequestsService) { }

  ngOnInit() {
    this.service.getData('sponsers')
    .subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

}
