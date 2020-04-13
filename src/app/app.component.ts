import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: false;
  title = 'IEEE ANUSB';

  onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
    this.isOpen = false;
  }
}
