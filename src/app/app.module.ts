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
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { WebsiteComponent } from './website/website.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { PostComponent } from './post/post.component';
import { SponserComponent } from './sponser/sponser.component';
import { SeriesComponent } from './series/series.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutusComponent, ContactComponent, EventsComponent, FooterComponent, VolunteersComponent, BlogComponent, WebsiteComponent, PostComponent, SponserComponent, SeriesComponent],
  imports: [BrowserModule, HttpClientModule, ClickOutsideModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
