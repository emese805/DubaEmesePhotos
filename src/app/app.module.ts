import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SlideshowHomeComponent } from './slideshow-home/slideshow-home.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { FooterComponent } from './footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AlbumComponent } from './gallery/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    SlideshowHomeComponent,
    GalleryComponent,
    NewProjectComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    HomeContactComponent,
    FooterComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
