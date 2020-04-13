import { WebsiteComponent } from './website/website.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', component: WebsiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
