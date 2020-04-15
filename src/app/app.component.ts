import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen = false;
  title = 'IEEE ANUSB';
  innerWidth: number;
  isLarge = false;


  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 767) {
      this.isLarge = true;
    } else {
      this.isLarge = false;
      this.isOpen = false;
    }
}

  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth > 767) {
    this.isLarge = true;
    this.isOpen = true;

  } else {
    this.isOpen = false;
    this.isLarge = false;
  }
}

changeNavStatus() {
  this.isOpen = !this.isOpen;
  return this.isOpen;
}
  onClickedOutsideNav(e: Event) {
    this.isOpen = false;
  }
}
