import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { VolunteersComponent } from './volunteers/volunteers.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutusComponent, ContactComponent, EventsComponent, FooterComponent, VolunteersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
